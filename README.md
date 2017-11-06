# cGG
A wrapper for the ChampionGG API.
 
GitHub: [cGG](https://github.com/UghThatGuyAgain/cGG)
## Installation
Using NPM,

`npm install cGG`

Then, you can require it in your file as such:
```file.js
const cGG = require("cGG").cGG
// OR
const {cGG} = require("cGG")
 
// Don't forget to initialize it in a variable!
// For now, we'll use 'api' for the documents.
const api = new cGG("insert-your-key")
 
// Refer to the documentation below for more info
api.champions()
  .then(data => {
    // Do what you will with data
    console.log(data)
  }
  .catch(err => console.error(err))
   
// If you need tags, you can do so like this:
api.champions({"elo": ["bronze"], "champData": ["kda", "damage", "minions"]})
  .then(data => {
    console.log(data)
  }
  .catch(err => console.error(err))
```
## Usage
It's as simple as using the methods provided and then fulfilling the promise to use.
Note: These descriptions are taken directly from the ChampionGG website.
* `champions()`
  * Parameters: `(Optional Tags)`
    * Optional tags include one or more of these:
    * **"limit":** *Integer*
    * **"skip":** *Integer*
    * **"elo":** 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'PLATINUM,DIAMOND,MASTER,CHALLENGER'
    * **"champData":** 'kda', 'damage', 'minions', 'wins', 'wards', 'positions', 'normalized', 'averageGames', 'overallPerformanceScore', 'goldEarned', 'sprees', 'hashes', 'wins', 'maxMins', 'matchups'
    * **"sort":** *parameter-direction*
    * **"abriged":** *Boolean*
  * Returns a list of champions/roles that are played over the minimum threshold (at least 1000 games and at least 11% playrate in the role). Please note that there's a valid entry for each valid champion/role combination, so the results are more than the number of champs in the game.
* `matchupsByRole()`
  * Parameters: `Integer: championId`, `String: role`, `(Optional Tags)`
    * **"elo":** 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'PLATINUM,DIAMOND,MASTER,CHALLENGER'
    * **"skip":** *Integer*
    * **"limit":** *Integer*
  * Returns matchups for a specific champ in a specific role.
* `matchupsByChamp()`
  * Parameters: `Integer: championId`, `(Optional Tags)`
    * **"elo":** 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'PLATINUM,DIAMOND,MASTER,CHALLENGER'
    * **"skip":** *Integer*
    * **"limit":** *Integer*
  * Returns matchups for a specific champ.
* `averagesByChamp()`
  * Parameters: `Integer: championId`, `(Optional Tags)`
     * **"limit":** *Integer*
     * **"skip":** *Integer*
     * **"elo":** 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'PLATINUM,DIAMOND,MASTER,CHALLENGER'
     * **"champData":** 'kda', 'damage', 'minions', 'wins', 'wards', 'positions', 'normalized', 'averageGames', 'overallPerformanceScore', 'goldEarned', 'sprees', 'hashes', 'wins', 'maxMins', 'matchups'
     * **"sort":** *parameter-direction*
  * Returns a list of roles played by a specific champion that are played over the minimum threshold (at least 1000 games and at least 11% playrate in the role).
* `generalSiteInformation()`
  * Parameters: `(Optional Tags)`
    * **"elo":** 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'PLATINUM,DIAMOND,MASTER,CHALLENGER'
  * Returns general site information.
* `overall()`
  * Parameters: `(Optional Tags)`
    * **"elo":** 'BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'PLATINUM,DIAMOND,MASTER,CHALLENGER'
  * Returns overall performance champ data sets (as in ChampionGG landing page)

## ChampionGG Documentation
To some, the documentation provided by ChampionGG may seem a bit confusing. As someone who was just as confused, I'm here to dumb it down for you.

####  Optional Tags:
The optional tags that are usable in each of these may include ones such as "champData", "elo" and others.

**limit**: is a the number of results to retrieve. Inserting 10 means you get 10 pieces of data in the response.

**skip**: is the amount of results to skip. Again, inserting 10 means you skip 10 pieces of data.

**elo**: is pretty obvious. You get the response based on which leagues you insert.
Note: You cannot request specific responses for DIAMOND, MASTER, or CHALLENGER.

**champData**: refers to the filters put on the response. Each tag you add on to this parameter will lessen the filter.
For example, adding the kda, damage, and minion filters will only give you reponses related to those.

**sort**: This one confuses me quite a bit. Help me out here :D

**abriged**: Same here. I'll more than likely take any description.

## Notes
I did _not_ include rate limiting in this library. I found it unnecessary, as I believe that anyone who wishes to use this should know how the rate limit works (which, as of 10/29/17 is 3000 requests per 50 minutes and 50 requests per 10 seconds.) Make sure to respect these limits, otherwise your key will more than likely get blacklisted and be disabled.
 
Aside from this, I don't believe I'll be adding any error handling. It's a very minimalistic library that's easy to use. I see not a reason why even an inexperienced developer shouldn't be able to find their own mistakes. With that being said, I'd like to make sure that you check your code. Make sure your tags have colons, a trailing comma between each one, are spelled correctly and are in quotes.