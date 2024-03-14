export const API_KEY = 'AIzaSyCLuo-oSxA_W2g1GtRT3I-d1lKh1_bV19w';

export const value_converter = (value) =>{
    if(value > 1000000){
        return Math.floor(value/100000) +"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+ "K";
    }else{
        return value;
    }

}