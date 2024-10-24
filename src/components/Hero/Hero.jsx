import { useState } from "react"

export default function Hero({handleClaimFreeCredit}) {
    
    return (
        <div
            className="hero h-[545px] bg-black rounded-3xl mt-6"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/9TYMsXL/bg-shadow.png)",
            }}>
            <div className="hero-content text-neutral-content text-center">
                <div className="flex flex-col items-center justify-center">
                    <img src="https://i.ibb.co.com/VvY4pSf/banner-main.png" alt="" />
                    <h1 className="mb-4 text-5xl font-bold mt-6">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-4">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <div className="p-1 border-2 rounded-xl border-[#E7FE29]">
                        <button onClick={handleClaimFreeCredit} className="btn bg-[#E7FE29] font-bold hover:bg-[#c9db2e]">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
