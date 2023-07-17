/**
 *
 * @param arg {string[]}
 * @return {string[]}
 */
function arrSort(arg){
    let cache = 0;
    let last = 0;
    return arg.sort((a,b)=>{
        return a.replaceAll(/.*?(\d+)/g,'$1') - b.replaceAll(/.*?(\d+)/g,'$1')
    }).reduce((a,b,index)=>{
        let newB = b.replaceAll(/.*?(\d+)/g,'$1')
        let count = a.length;
        if(newB !== cache){
            last = index;
            a.push(b);
            cache = newB;
        }else{
            let flag = true;
            while(flag){
                if(a[count-1].replace(/([A-Z])+\d*/g,'$1').charCodeAt()<b.replace(/([A-Z])+\d*/g,'$1').charCodeAt()){
                    flag = false;
                }else{
                    if(--count<=last) flag = false
                }
            }
            a.splice(count,0,b);
        }
        return a
    },[])
}
