<template>
  <div>
    <h1>Movie Draft Happy Fun Time</h1>
    <h2>Build a roster of upcoming films and compete for the highest gross earnings</h2>
  </div>
  <div>
    <strong>What is a movie draft?</strong>
    <p>First, full credit to <a href='https://www.nightattack.tv/'>Night Attack/NSFW Show</a>, <a href='https://www.diamondclub.tv/'>Diamond Club</a>, and <a href='https://www.chatrelm.net'>Chat Relm</a>. The idea of a movie draft is not my own; I simply wrote some software to help my coworkers and I conduct our own.</p>
    <p>A movie draft is something like a fantasy sports draft… or so I’m told. Generally, there are two drafts per year: the Summer Block Buster Season and the Winter Oscar Bait Season. A group of friends get together with equal amounts of fake money to buy upcoming movies in an auction. Roughly 30 movies are generally included in the draft, and players bid to purchase them. The goal is to have the highest income from your owned movies using U.S. domestic grosses, ending two weeks after the final movie is released. This implementation is rather U.S.-centric.</p>
  </div>
  <div>
    <strong>General Info</strong>
    <ul>
    <li>There are 2 drafts per year:
        <ul>
        <li>Summer Blockbuster: Usually kicking off in May</li>
        <li>Winter Oscar Bait: Usually kicking off in October</li>
        </ul>
    </li>
    <li>Approximately 30 movies should be chosen per draft.</li>
    <li>Groups of 4–6 players are best, given the number of movies.</li>
    <li>The order of movies is randomized prior to drafting.</li>
    <li>Each week the (domestic) film grosses are updated using Box Office Mojo.</li>
    <li>The game ends 14 days after the final movie is released.</li>
    </ul>
  </div>
  <div>
    <strong>Rules Per Team</strong>
    <ul>
    <li>Drafting takes 1–2 hours and should occur sometime during the 2 weeks prior to the first film’s release.</li>
    <li>Each player gets 100 “Draft Bucks” used to bid on a major film studio release from the current season.
        <ul>
        <li>Each player has at most $100 to spend on all their combined purchases; they may not exceed $100.</li>
        </ul>
    </li>
    <li>Films are put up for auction one at a time in random order to all players.</li>
    <li>Bidding on a film is open while its trailer plays. Players should speak loudly so that bids are heard during the video.</li>
    <li>Vigorous discussion is encouraged (and is a large part of the fun).</li>
    <li>Should the bidding for any film reach $100, players may continue bidding for a lower percentage of that film’s gross.
        <ul>
        <li>“I bid $100 at 70%” means the film's domestic gross would be multiplied by 0.7 before being applied to the player’s total. A subsequent bid of “$100 at 65%” would take the lead because the player is accepting less of the film’s gross total toward their score.</li>
        <li>Players must reach $100 bids before bidding down the percentage.</li>
        <li>Players who do not have $100 may not participate in percentage bidding.</li>
        </ul>
    </li>
    <li>If multiple groups are playing (each an independent draft), the winners of each group will compete by drafting efficiency (total Adjusted Gross per Draft Buck spent). The group winner who also has the best efficiency will get ultimate bragging rights.</li>
    <li>If a large group (8–12) wants to play, players may pair up.</li>
    </ul>
  </div>
</template>