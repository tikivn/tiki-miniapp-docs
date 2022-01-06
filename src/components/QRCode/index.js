import * as React from 'react';
import * as ReactDOM from 'react-dom';

import isEqual from 'lodash/isEqual';
import qrGenerator from 'qrcode-generator';

import Import from '../Import';

export class QRCode extends React.Component {
  canvas;

  static defaultProps = {
    page: '', // Need open firstPage first then navigate to page to have back function
    firstPage: '', // First page of API-Demo App, please update if you change config in app
    domainUrl: 'https://tiki.vn',
    // domainUrl: 'https://tala.xyz',
    appId: 'vn.tiki.miniapp.demo',
    // appId: 'tiki-miniapp-demo',
    logoImage:
      'https://salt.tikicdn.com/cache/160x160/ts/miniapp/2d/c9/b2/9b163e0158c54b97c1f61e6107d7abb7.png',
    ecLevel: 'H',
    enableCORS: false,
    enableLogo: true,
    shortName: '',
    logoWidth: 48,
    logoHeight: 48,
    size: 140,
    quietZone: 0,
    bgColor: '#FFFFFF',
    fgColor: '#000000',
    logoOpacity: 1,
    qrStyle: 'dots',
    openOnClick: true,
    eyeRadius: [
      {
        outer: [12, 12, 0, 12],
        inner: [50, 50, 50, 50],
      },
      {
        outer: [12, 12, 12, 0],
        inner: [50, 50, 50, 50],
      },
      {
        outer: [12, 0, 12, 12],
        inner: [50, 50, 50, 50],
      },
    ],
    // Import component
    showImport: true,
    importStyle: '',
    importContent: null,
    importAppId: null,
    importAppName: null,
    importTemplate: 'api-demo',
    importGithub: null,
    importPage: null,
    importGithubFolder: null,
    params: null, // Object
    qrId: 'react-qrcode-tiki',
  };

  static utf16to8(str) {
    let out = '',
      i,
      c;
    const len = str.length;
    for (i = 0; i < len; i++) {
      c = str.charCodeAt(i);
      if (c >= 0x0001 && c <= 0x007f) {
        out += str.charAt(i);
      } else if (c > 0x07ff) {
        out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
      } else {
        out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
      }
    }
    return out;
  }

  /**
   * Draw a rounded square in the canvas
   */
  drawRoundedSquare(lineWidth, x, y, size, radii, fill, ctx) {
    ctx.lineWidth = lineWidth;

    // Adjust coordinates so that the outside of the stroke is aligned to the edges
    y += lineWidth / 2;
    x += lineWidth / 2;
    size -= lineWidth;

    if (!Array.isArray(radii)) {
      radii = [radii, radii, radii, radii];
    }

    // Radius should not be greater than half the size or less than zero
    radii = radii.map(r => {
      r = Math.min(r, size / 2);
      return r < 0 ? 0 : r;
    });

    const rTopLeft = radii[0] || 0;
    const rTopRight = radii[1] || 0;
    const rBottomRight = radii[2] || 0;
    const rBottomLeft = radii[3] || 0;

    ctx.beginPath();

    ctx.moveTo(x + rTopLeft, y);

    ctx.lineTo(x + size - rTopRight, y);
    if (rTopRight) ctx.quadraticCurveTo(x + size, y, x + size, y + rTopRight);

    ctx.lineTo(x + size, y + size - rBottomRight);
    if (rBottomRight)
      ctx.quadraticCurveTo(
        x + size,
        y + size,
        x + size - rBottomRight,
        y + size,
      );

    ctx.lineTo(x + rBottomLeft, y + size);
    if (rBottomLeft)
      ctx.quadraticCurveTo(x, y + size, x, y + size - rBottomLeft);

    ctx.lineTo(x, y + rTopLeft);
    if (rTopLeft) ctx.quadraticCurveTo(x, y, x + rTopLeft, y);

    ctx.closePath();

    ctx.stroke();
    if (fill) {
      ctx.fill();
    }
  }

  /**
   * Draw a single positional pattern eye.
   */
  drawPositioningPattern(
    ctx,
    cellSize,
    offset,
    row,
    col,
    radii = [0, 0, 0, 0],
  ) {
    const lineWidth = Math.ceil(cellSize);

    let radiiOuter;
    let radiiInner;
    if (typeof radii !== 'number' && !Array.isArray(radii)) {
      radiiOuter = radii.outer || 0;
      radiiInner = radii.inner || 0;
    } else {
      radiiOuter = radii;
      radiiInner = radiiOuter;
    }

    let y = row * cellSize + offset;
    let x = col * cellSize + offset;
    let size = cellSize * 7;

    // Outer box
    this.drawRoundedSquare(lineWidth, x, y, size, radiiOuter, false, ctx);

    // Inner box
    size = cellSize * 3;
    y += cellSize * 2;
    x += cellSize * 2;
    this.drawRoundedSquare(lineWidth, x, y, size, radiiInner, true, ctx);
  }

  /**
   * Is this dot inside a positional pattern zone.
   */
  isInPositioninZone(col, row, zones) {
    return zones.some(
      zone =>
        row >= zone.row &&
        row <= zone.row + 7 &&
        col >= zone.col &&
        col <= zone.col + 7,
    );
  }

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  get qrPage() {
    const {page, firstPage, domainUrl, appId, params} = this.props;

    const _firstPage = firstPage ? `/${firstPage}` : '';
    const subPage = page ? `?page=${page}` : '';
    const p = params
      ? `${subPage ? '&' : '?'}${new URLSearchParams(params)}`
      : '';
    return `${domainUrl}/apps/${appId}${_firstPage}${subPage}${p}`;
  }

  update() {
    const {
      ecLevel,
      enableCORS,
      enableLogo,
      size,
      quietZone,
      bgColor,
      fgColor,
      shortName,
      logoImage,
      logoWidth,
      logoHeight,
      logoOpacity,
      qrStyle,
      eyeRadius,
    } = this.props;

    const qrCode = qrGenerator(0, ecLevel);
    qrCode.addData(QRCode.utf16to8(this.qrPage));
    qrCode.make();

    const canvas = ReactDOM.findDOMNode(this.canvas.current);
    const ctx = canvas.getContext('2d');

    const canvasSize = +size + 2 * +quietZone;
    const length = qrCode.getModuleCount();
    const cellSize = size / length;
    const scale = window.devicePixelRatio || 1;
    canvas.height = canvas.width = canvasSize * scale;
    ctx.scale(scale, scale);

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    const offset = +quietZone;

    const positioningZones = [
      {row: 0, col: 0},
      {row: 0, col: length - 7},
      {row: length - 7, col: 0},
    ];

    ctx.strokeStyle = fgColor;
    if (qrStyle === 'dots') {
      ctx.fillStyle = fgColor;
      const radius = cellSize / 2;
      // remove background behind logo
      const dwidth = logoWidth || size * 0.2;
      const dheight = logoHeight || dwidth;
      const dx = (size - dwidth) / 2;
      const dy = (size - dheight) / 2;

      for (let row = 0; row < length; row++) {
        for (let col = 0; col < length; col++) {
          const radiusDot = (radius / 100) * 75;
          if (
            qrCode.isDark(row, col) &&
            !this.isInPositioninZone(row, col, positioningZones) &&
            (row * cellSize + radius + offset <= dy + offset - 4 ||
              row * cellSize + radius + offset >= dy + offset + dwidth + 4 ||
              col * cellSize + radius + offset <= dx + offset - 4 ||
              col * cellSize + radius + offset >= dx + offset + dheight + 4)
          ) {
            ctx.beginPath();
            ctx.arc(
              Math.round(col * cellSize) + radius + offset,
              Math.round(row * cellSize) + radius + offset,
              radiusDot,
              0,
              2 * Math.PI,
              false,
            );
            ctx.closePath();
            ctx.fill();
          }
        }
      }
    } else {
      for (let row = 0; row < length; row++) {
        for (let col = 0; col < length; col++) {
          if (
            qrCode.isDark(row, col) &&
            !this.isInPositioninZone(row, col, positioningZones)
          ) {
            ctx.fillStyle = fgColor;
            const w =
              Math.ceil((col + 1) * cellSize) - Math.floor(col * cellSize);
            const h =
              Math.ceil((row + 1) * cellSize) - Math.floor(row * cellSize);
            ctx.fillRect(
              Math.round(col * cellSize) + offset,
              Math.round(row * cellSize) + offset,
              w,
              h,
            );
          }
        }
      }
    }

    // Draw positioning patterns
    for (let i = 0; i < 3; i++) {
      const {row, col} = positioningZones[i];
      let radii = eyeRadius;
      if (Array.isArray(radii)) {
        radii = radii[i];
      }
      if (typeof radii == 'number') {
        radii = [radii, radii, radii, radii];
      }
      this.drawPositioningPattern(ctx, cellSize, offset, row, col, radii);
    }
    if (enableLogo) {
      const dwidth = logoWidth || size * 0.2;
      const dheight = logoHeight || dwidth;
      const dx = (size - dwidth) / 2;
      const dy = (size - dheight) / 2;
      if (logoImage) {
        const image = new Image();
        if (enableCORS) {
          image.crossOrigin = '*';
        }
        image.onload = () => {
          image.width = dwidth;
          image.height = dheight;
          ctx.save();
          ctx.globalAlpha = logoOpacity;
          ctx.drawImage(image, dx + offset, dy + offset, dwidth, dheight);
          ctx.restore();
        };
        image.src = logoImage;
      } else {
        ctx.fillStyle = '#ccc';
        ctx.fillRect(dx + offset, dy + offset, dwidth, dheight);
        ctx.fillStyle = '#fff';
        ctx.font = '20px/1.5 white Roboto,sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
          shortName,
          dx + offset + dwidth / 2,
          dy + offset + dheight / 2,
        );
      }
    }
  }

  onClick = () => {
    if (!this.props.openOnClick) {
      return;
    }

    window.open(this.qrPage);
  };

  get importPage() {
    const {importTemplate, importGithub, importPage, page} = this.props;
    if (!importTemplate || importGithub) {
      return '';
    }
    return importPage || page;
  }

  render() {
    const {
      showImport,
      importStyle,
      importContent,
      importAppId,
      importAppName,
      importTemplate,
      importGithub,
      importGithubFolder,
      qrId,
    } = this.props;
    const size = +this.props.size + 2 * +this.props.quietZone;

    return (
      <>
        <canvas
          onClick={this.onClick}
          id={qrId}
          height={size}
          width={size}
          style={{
            height: size,
            width: size,
            marginBottom: 16,
            cursor: 'pointer',
            display: 'flex',
            margin: '0 auto 16px',
          }}
          ref={this.canvas}
        />
        <div>
          Hoặc sử dụng link
          <br />
          <a target="_blank" href={this.qrPage}>
            {this.qrPage}
          </a>
        </div>
        {!!showImport && (
          <Import
            style={importStyle}
            content={importContent}
            appId={importAppId}
            appName={importAppName}
            template={importTemplate}
            github={importGithub}
            page={this.importPage}
            githubFolder={importGithubFolder}
          />
        )}
      </>
    );
  }
}
