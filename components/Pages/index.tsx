import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { BulkOperationBase } from 'mongodb';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "Shiraz Weather"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name}
        style={{
          minHeight: 200, margin: 10, width: "calc(100% - 20px)", backgroundColor: "white"
        }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props.data.current_condition[0].FeelsLikeC, null, 2)}</pre> */}

        {/* <img src="https://cdn.ituring.ir/research/68/temp.png"
          style={{ height: 30, objectFit: "contain" }} /> */}
        <c-x>
          <f-c style={{ fontFamily: "vin", fontSize: 20, backgroundColor: "white" }}>Weather:</f-c>
          <f-cse>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15,fontFamily:"vin",fontSize:20 }}>
              <img src="https://cdn.ituring.ir/research/68/temp.png"
                style={{ height: 30, objectFit: "contain" }} />
                <span>Feels like:{props.feelslikec} °C</span>
            </f-cc>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15,fontFamily:"vin",fontSize:20 }}>
            <img src="https://cdn.ituring.ir/research/68/humidity.jpg"
                style={{ height: 30, objectFit: "contain" }} />
                <span>Humidity:{props.humidity} %RH</span>
            </f-cc>
          </f-cse>
          <br-x></br-x>
          <f-cse>
          <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15,fontFamily:"vin",fontSize:20 }}>
            <img src="https://cdn.ituring.ir/research/68/pressure.jpg"
                style={{ height: 30, objectFit: "contain" }} />
                <span>Pressure: {props.Pressure} </span>
            </f-cc>
            <f-cc style={{ height: 80, width: 300, backgroundColor: "skyblue", borderRadius: 15, fontFamily:"vin",fontSize:20 }}>
            <img src="https://cdn.ituring.ir/research/68/day.jpg"
                style={{ height: 30, objectFit: "contain" }} />
                <span>ServerDate: {props.date} </span>
            </f-cc>
          </f-cse>


        </c-x>

        {/* <div style={{ direction: "ltr", fontFamily: "vin", fontSize: 20 }}>
          <span>Feels like: {props.feelslikec} °C</span>
          <br />
          <span>Humidity: {props.humidity} %RH</span>
          <br />
          <span>Pressure: {props.Pressure} </span>
          <br />
          <span>ServerDate: {props.date} </span>



        </div> */}
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://cdn.ituring.ir/research/api/weather")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let Pressure = data.current_condition[0].pressure
  let date = new Date().toLocaleDateString()



  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        Pressure,
        date,
        // nlangs,
      })
    },
  }
}