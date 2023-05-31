import React from "react";

import { useEffect, useState } from "react";
import { Table,Space } from "antd";

import "./table.css";
import ReactDOM from 'react-dom';
const { createRoot } = ReactDOM;





function Tabular() {
    
    // const [columns, setColumns]=useState([

    const columns=[
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
          },
          {
            title: 'ATTRIBUTES',
            dataIndex: 'attributes',
            key: 'attributes',
          },
          {
            title: 'TITLE',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'ImageURL',
            key: 'imageurl',
            dataIndex: 'imageurl',
            render: (text) => <a>{text}</a>,

           
          },
          {
            title: 'DESCRIPTION',
            key: 'description',
           dataIndex:'description',
          },
          {
            title: 'DownloadLINK',
            key: 'downloadlink',
           dataIndex:'downloadlink',
           render: (text) => <a>{text}</a>,

          },
          {
            title: 'COMMENT',
            key: 'comment',
           dataIndex:'comment',
          },
          {
            title: 'UserID',
            key: 'userid',
           dataIndex:'userid',
          },

        // {
        //     title: "ID",
        //     dataIndex:"id",
        // },
        // {
        //     title:"Attributes",
        //     dataIndex:"quote",
        // },
        // {
        //     title:"Title",
        //     dataIndex:"",
        // },
        // {
        //     title:"ImageURL",
        //     dataIndex:"",
        // },
        // {
        //     title:"Description",
        //     dataIndex:"",
        // },
        // {
        //     title:"Download",


        // },
        // {
        //     title:"Comment",
        //     dataIndex:"",
        // },
        // {
        //     title:"UserId",
        //     dataIndex:"",
        // },
    ];
    // const [dataSource, setDataSource] = useState([]);

    const data = [
        {
          key: '1',
          id:'1',
          attributes:"krishna",
          title:"Potato Crop Hero",
          imageurl:"https://www.google.com",
          description:" potatos fhasdfasf",
          downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
          comment :" do hard work",
          userid:"12",
        },
        {
            key: '2',
            id:'2',
            attributes:"venky",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"42",
          },
          {
            key: '3',
            id:'3',
            attributes:"kishore",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"76",
          },
          {
            key: '4',
            id:'4',
            attributes:"Mani",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"15",
          },
          {
            key: '5',
            id:'5',
            attributes:"surya",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"10",
          },
          {
            key: '6',
            id:'6',
            attributes:"krishna",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"82",
          },
          {
            key: '7',
            id:'7',
            attributes:"vamsi",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"92",
          },
          {
            key: '8',
            id:'8',
            attributes:"raju",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"52",
          },
          {
            key: '9',
            id:'9',
            attributes:"vikram",
            title:"Potato Crop Hero",
            imageurl:"https://www.google.com",
            description:" potatos fhasdfasf",
            downloadlink :"https://dfiafahfsidfashfii23hf3kH3",
            comment :" do hard work",
            userid:"34",
          },

      ];
    // useEffect(() => {     
    //     fetch("https://dummyjson.com/quotes")
    //     .then((res) => res.json())
    //     .then((result) => {
            // const list=result.quotes|| []
            // const firstObject =list[0] || {}
            // const cols=[]
            // for(const key in firstObject){
            //     const col={
            //         title:key,
            //         dataIndex:key
            //     }
            //     cols.push(col);
                
            // }
            // setColumns(cols);
        // setDataSource(result.quotes);
        
    //   });
         
    // },[]);
    // return (
    //  <div className="s1">
    //     <div className="a1">
    //                  <h2>SUCCESS STORIES OF INDIAN FARMERS</h2>
    //                  </div>
    //     <Table className="s1"  columns={columns} dataSource={dataSource}   scroll={{y:800}}/>


    // </div>
// );
// const tabular=() => <Table columns={columns}
// dataSource={data} />;
// const ComponentDemo =Tabular;
// createRoot(mountNode).render(<ComponentDemo/>);
return(<div className="a1">
<h2>SUCCESS STORIES OF INDIAN FARMERS</h2>
<Table className="ant_table_cell" columns={columns} dataSource={data} />

</div>
);

  const mountNode = document.getElementById("root");
ReactDOM.render(<Tabular />, mountNode);
}



export default Tabular;