// KURAL 1: JSX icinde mutlaka 1 tane parent element olmalidir
// KURAL 2: Elementlerin attribute lari camel case ile yazilmalidir
// KURAL3: Bazi attribute lar JS icin ozel bir anlam tasidigi icin 
//      JSX icinde isimleri HTML dekinden farkli olarak kullanilmaktadir.
//      Ornek: htmlFor, className vs.

export const Jsx1 = () => {
  return (
    <div>
      
      <label htmlFor="name">Jsx1</label>
      <div className="warning">Hello</div>
      
    </div>
  )
}


