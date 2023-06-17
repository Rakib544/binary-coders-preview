/* eslint-disable camelcase */
import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_SECRET,
})

const openAi = new OpenAIApi(config)

export async function getAiData(prompt: string) {
  const response = await openAi.createCompletion({
    model: 'text-davinci-003',
    temperature: 0.2,
    max_tokens: 2500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    prompt,
  })
  const completion = response.data.choices[0].text
  console.log(completion)

  return completion
}
