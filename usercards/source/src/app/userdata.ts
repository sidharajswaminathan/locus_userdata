export interface Product {
    product: string;
}
export interface Users {
    id: string;
    name: string;
    items: Product[];
    pincode: string;
}
  
export const userList: Users[] = [
    {id:'BB_1',name:'john',items:[{product:'Itema'}],pincode:'hamstreet, Chennai - 6000154'},
    {id:'BB_2',name:'marie john',items:[{product:'Itemb'}],pincode:'hamstreet, africa - 6000159'},
    {id:'BB_3',name:'sunday master',items:[{product:'Itema'}],pincode:'hamstreet, Chennai - 6000144'},
    {id:'BB_4',name:'locus',items:[{product:'Itemc'}],pincode:'hamstreet, Chennai - 6000154'}
]