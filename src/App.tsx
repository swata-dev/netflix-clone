import './App.css';
import { requests } from './request';
import { Row } from './components/Row';

function App() {
  return (
    <div className='App'>
      <Row
        title='Netflix Originials'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentary' fetchUrl={requests.fetchDocumentMovies}/>
    </div>
  );
}

export default App;
