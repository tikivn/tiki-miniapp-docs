import React from 'react';
import { Link } from 'bisheng/router';

export default function NotFound() {
  return (
    <div id="page-404">
      <section>
        <h1>404</h1>
        <p>
          Sorry, we couldn't find that page ...
          <Link to="/">Back to home</Link>
        </p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#react-content { height: 100%; background-color: #fff }',
        }}
      />
    </div>
  );
}
