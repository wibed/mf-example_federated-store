import renderThunk from './server-entry'

function middleware(express, app, done) {
  // static path where files such as images and js will be served from
  app.use('/static', express.static('./dist/client'));

  const serverRender = renderThunk();
  app.get('/*', serverRender);

  done();
}

export default middleware;
