import React from 'react';

const MovieSlider = () => {
    return (
        <div>
            <div className="card">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=40" alt="image1" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=10" alt="image1" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=20" alt="image1" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=30" alt="image1" />
                        </div>
                        <div class="carousel-item">
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=50" alt="image2" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=60" alt="image2" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=70" alt="image2" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=80" alt="image2" />
                        </div>
                        <div class="carousel-item">
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=90" alt="image3" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=100" alt="image3" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=150" alt="image3" />
                            <img className="w-25 h-25" src="https://picsum.photos/1920/1080?random=200" alt="image3" />
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default MovieSlider;