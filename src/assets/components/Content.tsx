import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 min-vw-100">
      <div className="card">
        <div className="card-body">
          <h1 className="headline-1 text-center mb-5">3-Logy spol. s r. o.</h1>
          <div className="text-1 text-center mb-5">
            Spoločnosť 3-Logy s.r.o. sa špecializuje na nákup a výrobu tovaru a
            jeho následný predaj konečnému spotrebiteľovi a iným
            prevádzkovateľom živnosti.
          </div>
          <div className="text-1 row justify-content-center mb-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              Ing. Juraj Baláž | Konateľ
              <br />
              Mobil: +421 (0) 911 561 885
              <br />
              E-Mail: info@3-logy.com
              <br />
              Web: www.3-logy.com
            </div>
            <div className="col-12 col-md-6 text-center">
              3-Logy s.r.o. <br />
              95162 Nevidzany 187 <br />
              Slovenská republika <br />
              IČO: 50 776 231, IČ DPH: SK2120460144 podľa §4
            </div>
          </div>
          <div className="text-1 text-center mb-5">
            3-Logy – Made with love in Slovakia
          </div>
          <div className="text-1 text-center ">
            3-Logy s.r.o., zapísaná na Nitra, odd. Sro, vl.č.42737/N, dátum
            vzniku: 7. marca 2017
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
