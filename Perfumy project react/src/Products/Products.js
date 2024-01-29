import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div class="products">
        <div class="box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCSGethgCzrsXUGQ_b2bCAWmaiwoh6ZXEGA&usqp=CAU"
            alt="perfume1"
          />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 800ml</p>
        </div>
        <div class="box">
          <img
            src="https://www.jiomart.com/images/product/original/590827173/fogg-force-fragrance-body-spray-for-men-150-ml-0-20211019.jpg?im=Resize=(420,420)"
            alt="villain"
          />
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img
            src="https://5.imimg.com/data5/UU/ZN/YE/SELLER-86150832/fogg-beautiful-secret-perfume-500x500.jpg"
            alt="Designs Club"
          />
          <p>
            Designer Club-Be Spoke Sportto Men's Perfume long lasting perfume
            500ml
          </p>
        </div>
        <div className="box">
          <img
            src="https://www.banglashoppers.com/media/catalog/product/cache/323f12c99b230d9cbd71d949e06824a6/f/o/fogg_scent_tycoon_edp_for_men_30ml.jpg"
            alt="Perfume4"
          />
          <p>
            Fogg Crystal Eu-de Fragnance blue-flower frap offer available 100ml
          </p>
        </div>

        <div className="box">
          <img
            src="https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3wxMzk5OTF8aW1hZ2UvanBlZ3xhREJoTDJnNU1DOHhOekUzTURneU1ERXdOREl5TWk4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfDcwZTZhZWFjMmQ0NzVmZGVhNzYxZmQ2MzFiNWZjYThkNDgxMDNhNTcxYWNhY2MwODNmM2U1OTBmN2E4YTMyMDg"
            alt=""
          />
          <p>Fog Impresso elotic aroma lorem ipsum cavtica - xpro favo 100ml</p>
        </div>

        <div className="box">
          <img
            src="https://richesm.com/wp-content/uploads/2022/02/Fogg-Nepolean-and-Voyager-for-Men.jpg"
            alt=""
          />
          <p>Fogg master red and blue for passionates - New Collection 200ml</p>
        </div>

        <div className="box">
          <img
            src="https://image.made-in-china.com/202f0j00tfQYoEjyJOus/30ml-50ml-Transparent-Perfume-Bottle-Empty.jpg"
            alt="perfume7"
          />
          <p>Vannila Crystal Form - New Collection 200ml</p>
        </div>

        <div className="box">
          <img
            src="https://m.media-amazon.com/images/I/61iXoxxe5sL.jpg"
            alt="perfume8"
          />
          <p>Glass Rose extra Load- perfume 300ml</p>
        </div>

        <div className="box">
          <img
            src="https://image.made-in-china.com/201f0j00WychjAOFcNuz/Customized-10ml-35ml-50ml-100ml-Clear-Spray-Glass-Perfume-Bottle-80ml-Square-Glass-Bottle-Aromatherapy-Bottles-Cosmetic-Lotion-Bottle.webp"
            alt="perfume9"
          />
          <p>Coco dark Frangrance perfume - New Collection 200ml</p>
        </div>
        <div className="box">
          <img
            src="https://www.banglashoppers.com/media/catalog/product/cache/323f12c99b230d9cbd71d949e06824a6/f/o/fogg_scent_tycoon_edp_for_men_30ml.jpg"
            alt="Perfume4"
          />
          <p>Fogg Crystal Eu-de Fragnance 100ml</p>
        </div>
        <div class="box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCSGethgCzrsXUGQ_b2bCAWmaiwoh6ZXEGA&usqp=CAU"
            alt="perfume1"
          />
          <p>Fogg Wood Extreme eu-dee perfume lime 100ml</p>
        </div>
        <div class="box">
          <img
            src="data:image/jpeg;base64,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"
            alt="perfume1"
          />
          <p>Sun Light fragment - glory victory 100ml</p>
        </div>
        {/* last row*/}
        <div class="box">
          <img
            src="https://media1.popsugar-assets.com/files/thumbor/uOq02Im87hLbzduNF18y6jGLQ_o=/fit-in/350x350/filters:format_auto():quality(70):extract_cover():upscale():fill(ffffff)/2018/08/21/711/n/1922153/490ef864c5818712_netimgFSZ0Zg.jpg"
            alt="perfume1"
          />
          <p>Twilly 'd Hermes - pocket pack 100ml</p>
        </div>

        <div class="box">
          <img
            src="https://i.pinimg.com/736x/43/12/cd/4312cd2f018eebf827c3d6bd54a9d965.jpg"
            alt="perfume1"
          />
          <p>Sun Light fragment - glory victory 100ml</p>
        </div>

        <div class="box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPCBr5Oqmi6K6rRoDfHonoZ1PFhs71IjJXA&usqp=CAU"
            alt="perfume1"
          />
          <p>Rosy Glossy - glory victory 100ml</p>
        </div>
      </div>
    </>
  );
};

export default Products;
