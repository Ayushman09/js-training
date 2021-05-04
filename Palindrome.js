function palindrome(word)
{
    revword=word.split("")
    revword=revword.reverse()
    revword=revword.join("")

    if(word.toLowerCase().replace(/\s/g,"") === revword.toLowerCase().replace(/\s/g,""))
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