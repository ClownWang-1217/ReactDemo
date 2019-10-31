import React from 'react'
import * as Barcode from 'jsbarcode'


export default class SimpleBarcode extends React.Component
{
    componentDidMount()
    {
        this.createBarCode();
    }

    createBarCode()
    {
        var strdata = {
            width : 1, height : 35, margin : 0, displayValue:true
        }
        let time = new Date();
        var str = {
            name:"wangtao",
            date: time.toString()
        }
        Barcode(this.barcode,JSON.stringify(str),{
           width:strdata.width,
           height:strdata.height,
           displayValue:strdata.displayValue,
           margin:strdata.margin,
        });
    }


    render()
    {
        return (<div>
            <svg
                    ref={(ref) => {
                        this.barcode = ref;
                    }}
                />
        </div>);
    }
}