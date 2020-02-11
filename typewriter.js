const sentence = "hello there from lighthouse labs";

const sentenceDelayAnimation = function(sentence) {
  let timer = 0
  for (const char of sentence) {
    setTimeout(() => { process.stdout.write(char) }, timer)
    timer += 100
  }
  setTimeout(() => process.stdout.write("\n"), timer)
}

sentenceDelayAnimation(sentence)