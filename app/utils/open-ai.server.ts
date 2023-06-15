import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_SECRET,
})

const openAi = new OpenAIApi(config)

export async function getAiData(prompt: string) {
  const response = await openAi.createCompletion({
    model: 'text-davinci-003',
    // eslint-disable-next-line camelcase
    max_tokens: 250,
    prompt,
  })
  const completion = response.data.choices[0].text

  return completion
}
