
export function Module4() {
    return (
        <section className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-52">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="basis-2/3 rounded-3xl accentWhiteBg p-6">
                    <div className="font-fantasy text-4xl">Time</div>
                    <p className="mb-4">This is how I spend my time. My biggest hobby is learning, as I am curious about almost everything.</p>
                    {/* <svg>chart</svg> */}
                </div>
                <div className="basis-1/3 flex flex-col gap-4">
                    <div className="rounded-3xl accentWhiteBg p-6 h-fit">
                        <div className="font-fantasy text-4xl">sdfsdfs</div> 
                        <div className="mb-4">This is my travel footprint. And currently I'm living in XiAn, China.</div>
                        <div className="relative w-fit">
                            <img width="600" height="586" src="https://www.qzq.at/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffootprint.8c66cb7d.jpg&w=640&q=75" className="rounded-3xl shadow-lg border-[1px] border-white/20" />
                            <span className="bg-slate-100 shadow-md text-slate-700 rounded-full py-2 px-6 slate-900 text-lg font-semibold absolute bottom-4 left-4">XiAn, China</span>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}