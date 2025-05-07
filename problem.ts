function formatString(input: string, toUpper?: boolean): string{
    if (toUpper===true) {
        return input.toUpperCase()
    }else {
        return input.toLowerCase()
    }
}