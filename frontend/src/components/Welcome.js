import React from 'react';

const Welcome = () => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Images Gallery</h1>
      <p class="lead">
        This is a simple application that retrieves photos using unsplash api.
      </p>
      <p>In order to start enter any search term in the input field.</p>
      <a
        class="btn btn-primary btn-lg"
        href="https://unsplash.com"
        target="_blank"
        role="button"
        rel="noreferrer"
      >
        Learn more
      </a>
    </div>
  );
};

export default Welcome;
