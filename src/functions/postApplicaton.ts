export async function postApplication({ name, tel, msg, url }: { name: string; tel: string; msg: string; url: string }) {
   try {
      const result = await fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            chat_id: "-1002167816438",
            text: `Заявка с сайта:\nИмя: ${name}\nТелефон: ${tel}\nКомментарий: ${msg}`,
         }),
      });
      return result;
   } catch (error) {
      return { error: true, msg: error };
   }
}
