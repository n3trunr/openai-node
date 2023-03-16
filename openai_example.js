/** Step 3: Initialize the library
 *  In your Node.js script, 
 *      initialize the library by loading the API key from the environment variable and 
 *      creating a configuration object: 
 * */

require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


/** Step 4: Create a completion
 *  Create a completion using the OpenAI API by calling the createCompletion function:
 *  This code generates a completion based on the "Hello world" prompt and logs the output to the console.
 */

async function generateCompletion() {
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello world",
      });
      console.log(completion.data.choices[0].text);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
  
  generateCompletion();
  
  /** Customizing Requests
   *  You can customize your API requests by passing custom axios request options as an optional final parameter: */
//   const completion = await openai.createCompletion(
//     {
//       model: "text-davinci-003",
//       prompt: "Hello world",
//     },
//     {
//       timeout: 1000,
//       headers: {
//         "Example-Header": "example",
//       },
//     }
//   );



  /** generateCompletion with input */
  async function generateCompletionWith(prompt) {
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
      });
      console.log("Completion object:", completion);
      console.log("Generated text:", completion.data.choices[0].text);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  }
  
  // Replace "Your prompt here" with the text you want to generate a completion for.
  generateCompletionWith("Your prompt here");
  

  /** Error Handling
   *  Handle errors using a try...catch statement. Error details can be found in either error.response or error.message.
   *  Further Reading
   *  Check out the full API documentation for more examples and information on the available functions. */