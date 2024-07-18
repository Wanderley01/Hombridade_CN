import "../Styles/homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {


  return (
      <div id="carouselExampleCaptions" class="carousel slide" data-coreui-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../src/assets/img/testimg.png" class="d-block w-100" alt="..." />

            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../src/assets/img/fundoheader.png" class="d-block w-100" alt="..." />

            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../src/assets/img/logo.png" class="d-block w-100" alt="..." />

            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
            <button class="carousel-control-prev" type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-coreui-target="#carouselExampleCaptions" data-coreui-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
      </div>
  ); 

}

      export default Carrossel;