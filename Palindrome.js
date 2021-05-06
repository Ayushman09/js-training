function palindrome(word)
{
    reverseWord=word.split("")
    reverseWord=reverseWord.reverse()
    reverseWord=reverseWord.join("")

    if(word.toLowerCase().replace(/\s/g,"") === reverseWord.toLowerCase().replace(/\s/g,""))
    {
        console.log("It is a Palindrome.")
    }
    else
    {
        console.log("Not a Palindrome.")
    }
}

palindrome("RadaR")
palindrome("Not")
palindrome("232")