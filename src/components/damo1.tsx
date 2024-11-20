export default function Damo1(all: any) {
    const { e, i, n, r, t } = all;
    
    
    console.log(e, i, n, r, t);
    

    





}




function to(t: any, { style: e, vars: n }: {style: any, vars: any}, i:any, r:any) {
    for (let a in Object.assign(t.style, e, r && r.getProjectionStyles(i)),
    n)
        t.style.setProperty(a, n[a])
        
}