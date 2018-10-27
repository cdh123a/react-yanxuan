
/*发送ajax请求*/
import axios from 'axios';
export default function ajax( url , data ={ } , methods = 'GET'){
  return new Promise( (resolve,reject) => {
    let response ;
    if(methods === 'GET'){
      //拼接url
      let spliceUrl = '';
      //没有参数就不需要
      if(data){
        //get请求的url地址包括参数  因此需要拼接起来
        // 将data对象的属性名和属性值都拼接 中间还要&
        // 将对象的属性名 遍历组成一个数组的方法 此时item就是data对象内每一个属性名
        Object.keys(data).forEach( item  => {
          spliceUrl += item + '=' + data[item] + '&';
        })
        //判断一下spliceUrl是否存在  没参数直接请求  拼接参数后再请求
        if(spliceUrl){
          //将最后一个 & 截取掉
          const finalUrl = spliceUrl.substring( 0 ,spliceUrl.length-1);
          //拼接成url
          url = url + '?' + finalUrl ;
        }
      }
      //不管有没有参数 都要发请求
      //发送请求  返回的是promise对象
      response =  axios.get(url);
    }else{
      //axios发送post请求第一个参数就是url地址  第二个就是参数对象
      response = axios.post(url,data);
    }
    /*这样子返回出去的就是response.data*/
    response.then( res => {
      resolve(res.data)
    },error => {
      reject(error)
    })
  })
}

