import { streamText } from 'ai';

// Switch models by changing this one line — same code works for all of them:
//   'openai/gpt-5.5'
//   'anthropic/claude-opus-4.7'
//   'google/gemini-3.1-pro'
const MODEL = 'anthropic/claude-opus-4.7';

const PROMPT = process.argv[2] || 'Explain quantum computing in simple terms.';

console.log(`\n--- Model: ${MODEL} ---\n`);

const result = streamText({
  model: MODEL,
  prompt: PROMPT,
});

for await (const chunk of result.textStream) {
  process.stdout.write(chunk);
}

console.log('\n');
console.log('Token usage:', await result.usage);
