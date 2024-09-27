import React from 'react'

export const Jsx5 = () => {

    const isAdmin = true;
    const discount = 10;

    
    // JSX yapilarinda if veya switch kullanimi yapilamaz
    // Bunun yerine ternary veya short circuit operator kullanilir.

  return (
    <div>
        {isAdmin ? <h2>Admin User</h2> : <h2>Customer User</h2>}

        <div>
            { !!discount && <h3 className="title">Discount: {discount}</h3>}
        </div>

    </div>
  )
}