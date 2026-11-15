import{bk as t,bl as e,bm as a,bn as o,bo as n,bp as s,bq as r,br as i,bs as h,bt as l,bu as d,bv as c,bw as p,bx as u,by as g,bz as m,bA as y,bB as w,bC as f,bD as b}from"./index-UvAvocSe.js";import"./react-vendor-xAhqJu7B.js";import"./query-vendor-bFS-GuFW.js";import"./supabase-vendor-DW0Ocl7u.js";const k={title:"Long and short: what they are and how you profit when the market falls",seoTitle:"Long and Short: What They Are and How You Profit When the Market Falls | AntarTrade",seoDescription:"What long and short mean, with simple examples. How to short on the chart, why a short can lose more than you put in, and what a short squeeze is (the GameStop story).",excerpt:"In a long you profit from a rise, in a short from a fall. Simple examples, where the risk is higher, how to short on the chart and what a short squeeze is.",category:"Trading for beginners",coverAlt:"Long and short: in rising and falling markets",html:`
<p class="lead">There are two ways to make money in the markets. In a <strong>long</strong> you profit when price goes up, and in a <strong>short</strong> you profit when price goes down. Long is the normal thing everyone knows. Short sounds a bit strange at first, but once you understand it, it's one of a trader's most important tools.</p>

<h2>What is a long?</h2>
<p>A long is like everything else in life: <strong>buy low and sell high</strong>. You buy a stock or a contract at a certain price, wait for the price to rise, sell, and make the difference.</p>
<p><strong>Example:</strong> we bought an Apple share at $100, and it rose to $120. We made $20 on each share, that's 20%. If we bought 100 shares, we paid $10,000 and sold for $12,000.</p>

<h2>What is a short?</h2>
<p>In a short you do the opposite: <strong>first you sell, and only then you buy</strong>. The goal is to sell high and buy low.</p>
<p>I know it sounds illogical, because you're selling something you don't have. Think of it like a loan: you sell now, and later you buy it back to return what you sold. The system lets you do this with one click.</p>
<p><strong>Example:</strong> we sold a Tesla share at $100, and it fell to $90. We bought it back at $90 and made 10%. But if after we sold at $100 the price went up, and we had to buy at $120, we lost $20.</p>

<h2>Bulls and bears: what bullish and bearish mean</h2>
<p>In the markets there's always a war between the <strong>bulls</strong> and the <strong>bears</strong>. It's worth knowing the terms, because you'll hear them everywhere:</p>
<ul>
<li>A <strong>bull</strong> attacks from the bottom up. That's why a long is called a <strong>bullish move</strong>, and the people going long are the "longs", the bulls. A <a href="/academy/glossary#bull-market">bull market</a> is a market in an uptrend.</li>
<li>A <strong>bear</strong> attacks from the top down. That's why a short is called a <strong>bearish move</strong>, and the people going short are the "shorts", the bears. A <a href="/academy/glossary#bear-market">bear market</a> is a market in a downtrend.</li>
</ul>
<p>The colors work the same way: <strong>green</strong> marks a rise and <strong>red</strong> marks a fall. When you're short, on most platforms your position will show in red.</p>

<h2>Where is the potential higher, and where is the risk?</h2>
<p>This is a question I love asking in the course, because the answer surprises a lot of people:</p>
<table class="rules">
<thead><tr><th></th><th>Long</th><th>Short</th></tr></thead>
<tbody>
<tr><td><strong>Maximum profit</strong></td><td>No ceiling. Buy at 100 and sell at 300, you made 200%. 500% and 1,000% are possible too</td><td>100% at most. Even if the company goes bankrupt and the price falls to 0</td></tr>
<tr><td><strong>Maximum loss</strong></td><td>What you put in. If the price falls to 0, you lose the amount you bought with</td><td>No ceiling. You sold at 100 and the price rose to 200, you lost 100%. It rose to 300, you lost 200%</td></tr>
</tbody>
</table>
<p>In other words, <strong>in a short you can lose more than the money you put in</strong>. That's one of the reasons you never enter a trade without a <a href="/academy/glossary#stop-loss">stop</a>, and especially not a short.</p>

<h2>How you actually short, on the chart</h2>
<p>In a short, every order is the opposite of a long. This is how it looks on my platform (<span class="en">NinjaTrader</span>, on the Nasdaq contract):</p>
<ul>
<li><strong>Entry:</strong> <span class="en">Sell Market</span> to enter right now, or <span class="en">Sell Limit</span> above the current price, to enter only when price reaches the point you chose.</li>
<li><strong>Stop:</strong> above the entry, because if price goes up you're losing. In a short the stop is a buy order: <span class="en">Buy Stop Market</span>.</li>
<li><strong>Target:</strong> below the entry, with a <span class="en">Buy Limit</span> order. To close a short you have to buy.</li>
</ul>
<figure><img src="/client-previews/antartrade/footer-credit/blog/long-short/ls-short-chart.jpg" alt="A short trade on the chart in NinjaTrader: a stop order above the entry and a target below it" loading="lazy" /></figure>
<p>I explained every order type, and when to use each one, in the article <a href="/blog/order-types">Order types: market, limit and stop</a>.</p>

<h2>What is a short squeeze?</h2>
<p>This is where the two things we learned come together. Everyone who's short has a stop above them, and that stop is a <strong>buy order</strong>. Now imagine lots of people went short in the same area, and all their stops sit in the same place above the price.</p>
<p>The moment price gets there, all the stops trigger at once: buy, buy, buy. All those purchases <strong>fuel the rise</strong>, and price flies up even further. That's a <strong>short squeeze</strong>.</p>
<p><strong>The famous story: GameStop (<span class="en">GME</span>), 2021.</strong> Hedge funds and institutions sat on the stock in a short, at crazy percentages. A group of small traders, organized on <span class="en">Reddit</span>, decided to buy together and push the price up. Within about three weeks the stock rose from roughly $4.5 to $119, more than 25 times, and the shorts lost billions of dollars.</p>
<p>If you want to find stocks with a high short percentage, you can go to the <span class="en">Finviz</span> screener and filter by <span class="en">Short Float</span>, for example above 20% or 30%. It's dangerous, but it's good to know the phenomenon, because it explains sharp moves that seem to come "out of nowhere".</p>

<div class="cta"><h2>Ready for the next step?</h2><p>Next, learn the orders you'll use in every trade in <a href="/blog/order-types">Order types: market, limit and stop</a>. And if you already want to trade a prop firm account, <a href="/comparison">compare the prop firms</a> side by side.</p></div>
`,faq:[{q:"What's the difference between long and short?",a:"In a long you buy and profit when the price rises. In a short you first sell, then buy back, and profit when the price falls."},{q:"How can I sell something I don't have?",a:"The system allows it. Think of it like a loan: you sell now, and later buy back to close the position. The profit or loss is the difference between the prices."},{q:"Is a short riskier than a long?",a:"Yes. In a long the maximum loss is the amount you put in. In a short there's no ceiling on the loss, because the price can keep rising. That's why you never go short without a stop."},{q:"Where do you put the stop in a short?",a:"Above the entry price, with a Buy Stop Market order. To close a short you have to buy, so both the stop and the target are buy orders."},{q:"What is a short squeeze?",a:"When price rises into the area where many shorts have their stops. Those stops are buy orders, and when they trigger together they push the price up even further."}]},v={title:"Order types: market, limit, stop and stop limit",seoTitle:"Order Types: Market, Limit, Stop and Stop Limit | AntarTrade",seoDescription:"The difference between market, limit, stop and stop limit orders, and what bid, ask and spread are. When to use each order, in a long and a short, with chart screenshots.",excerpt:"Market, limit, stop and stop limit, bid, ask and spread: what each order does, when to use it, and why a stop loss should only be a stop market.",category:"Trading for beginners",coverAlt:"Order types: market, limit, stop",html:`
<p class="lead">Before your first trade, you have to know the orders: <strong>market, limit, stop and stop limit</strong>, and also the <strong>bid and the ask</strong>. These are the tools you buy, sell and protect your account with. The buttons look a little different on every platform, but the orders are the same. If you understand them on one platform, you'll manage on any platform.</p>

<h2>How is the price on the screen set?</h2>
<p><strong>The price you see is the price of the last trade that was executed.</strong> If there's a buyer who wants to buy at 99 and a seller who wants to sell at 101, the price doesn't move. It only moves when there's a trade: a buyer and a seller agree on 100, and that's the new price.</p>
<p>And here's what's important to understand: <strong>the price on the screen isn't necessarily the price you can buy at.</strong> If you see 100, there may be no seller at 100 right now, and the nearest seller is at 101.</p>

<h2>Bid, ask and spread</h2>
<ul>
<li><strong><a href="/academy/glossary#bid">Bid</a>:</strong> the highest price someone is willing to pay right now. It's the nearest buyer, below the current price.</li>
<li><strong><a href="/academy/glossary#ask">Ask</a>:</strong> the lowest price someone is willing to sell at right now. It's the nearest seller, above the current price.</li>
<li><strong><a href="/academy/glossary#bid-ask-spread">Spread</a>:</strong> the gap between the bid and the ask. In the example: between 99 and 101.</li>
</ul>
<p>These buyers and sellers are waiting with limit orders. If they used market orders, they'd already be in a trade.</p>

<h2>Market order (<span class="en">Market</span>)</h2>
<p>The most common and simplest order: <span class="en">Buy Market</span> or <span class="en">Sell Market</span>. You're basically telling the system: <strong>buy for me now, as fast as possible, at the best price you can get.</strong></p>
<ul>
<li><strong>The advantage:</strong> instant execution.</li>
<li><strong>The drawback:</strong> you may well not get a good price. In the example above, a <span class="en">Buy Market</span> will buy at 101, not 100. And if there are no sellers at 101 and 102, it will buy at 103. That's called <a href="/academy/glossary#slippage">slippage</a>.</li>
</ul>

<h2>Limit order (<span class="en">Limit</span>)</h2>
<p>Limit, as in a limitation. You set the price in advance, and <strong>the order will execute only at that price.</strong> For example, a <span class="en">Buy Limit</span> at 97: don't buy for me at any other price. A <span class="en">Sell Limit</span> at 104: sell for me only when the price reaches 104.</p>
<ul>
<li><strong>The advantage:</strong> full control over the price.</li>
<li><strong>The drawback:</strong> it won't always fill. Very often the price comes close to your level, doesn't reach it, and goes the other way. And you missed the trade.</li>
</ul>
<p>A limit is also used for a target: you're in a trade, you place a <span class="en">Sell Limit</span> at the target price, and the trade closes in profit exactly there.</p>

<h2>Stop order (<span class="en">Stop Market</span>)</h2>
<p>The stop order is there <strong>to stop a loss.</strong> You're in a trade, no matter how you got in, and the price is going against you. The stop takes you out at the point you set in advance, before the loss becomes really big.</p>
<p><strong>In trading you always, always work with a stop.</strong> It's the difference between failure and success. Without a stop, one trade can go deep and wipe out the account.</p>
<p>The drawback: sometimes the stop will "burn" you, and the price will then come back in the direction you wanted. That's part of the game.</p>

<div class="box warn"><strong>Why a stop market and not a stop limit?</strong>A limit executes only at the exact price you asked for. In a sharp drop there may be no buyer at exactly that price, and the price will simply skip over the order and keep falling, while you're still in the trade. With a stop market, the moment the price touches the level, you're out at the best price available. Maybe not a perfect price, but you're out. That's why I use only a <span class="en">Stop Market</span> for a stop loss.</div>

<h2>Stop limit order (<span class="en">Stop Limit</span>)</h2>
<p>So when do you use a stop limit? When you want to <strong>buy at a price higher than the current price</strong>, or <strong>sell at a price lower than it</strong>.</p>
<p>It sounds strange: the price is 100 now, why would you want to buy at 105? There are reasons, for example when you want to enter only after the price breaks through a certain area. But the system can't accept a regular limit order above the price, because from its point of view you can buy cheaper right now. So the order has to be a stop order: a <span class="en">Buy Stop Limit</span> above the price, or a <span class="en">Sell Stop Limit</span> below it.</p>

<h2>My tip: <span class="en">Buy Bid</span> and <span class="en">Sell Ask</span> instead of market</h2>
<p>When I want to get in or out right here and now, <strong>I don't use a market order.</strong> Instead I use <span class="en">Buy Bid</span> (buying at the nearest buyer's price, a little below the current price) or <span class="en">Sell Ask</span> (selling at the nearest seller's price, a little above it).</p>
<ul>
<li><strong>The advantage:</strong> you almost always get a better price than with a market order. Often it fills that same moment.</li>
<li><strong>The drawback:</strong> sometimes it takes a few seconds, and sometimes the price runs away and you miss the trade.</li>
</ul>
<p>For me the advantages win. And when there's time, the best thing is to wait with a limit order at the level you chose in advance.</p>

<h2>Summary: which order for which situation</h2>
<table class="rules">
<thead><tr><th>What you want to do</th><th>In a long</th><th>In a short</th></tr></thead>
<tbody>
<tr><td>Enter now</td><td><span class="en">Buy Bid</span> or <span class="en">Buy Market</span></td><td><span class="en">Sell Ask</span> or <span class="en">Sell Market</span></td></tr>
<tr><td>Enter at a better price than the current one</td><td><span class="en">Buy Limit</span> below the price</td><td><span class="en">Sell Limit</span> above the price</td></tr>
<tr><td>Enter only after the price breaks a level</td><td><span class="en">Buy Stop Limit</span> above the price</td><td><span class="en">Sell Stop Limit</span> below the price</td></tr>
<tr><td>Stop loss</td><td><span class="en">Sell Stop Market</span> below the entry</td><td><span class="en">Buy Stop Market</span> above the entry</td></tr>
<tr><td>Profit target</td><td><span class="en">Sell Limit</span> above the entry</td><td><span class="en">Buy Limit</span> below the entry</td></tr>
</tbody>
</table>
<p>In a short everything is reversed, because to close a short you have to buy. There's a full explanation of shorting in the article <a href="/blog/long-short">Long and short</a>.</p>
<figure><img src="/client-previews/antartrade/footer-credit/blog/order-types/ot-chart-orders.jpg" alt="Orders on the chart in NinjaTrader: the right-click order menu, with limit and stop orders" loading="lazy" /></figure>
<p>In NinjaTrader, for example, you place most orders with a right-click on the chart, at the price level you want. Other platforms look a little different, but the orders are the same. If you trade a prop firm account on <span class="en">Tradovate</span>, you can also set a <a href="/blog/tradovate-daily-stop">daily stop</a> there, so one bad day doesn't blow the account.</p>

<div class="cta"><h2>Know your orders? Now manage the risk</h2><p>Once the orders are clear, the next step is <a href="/blog/risk-reward-1-to-3-losing-streaks">managing the risk on every trade</a>.</p></div>
`,faq:[{q:"What's the difference between a market order and a limit order?",a:"A market order executes immediately, at the best price available at that moment, so sometimes at a poor price. A limit order executes only at the price you set in advance, so sometimes it doesn't execute at all."},{q:"What are bid and ask?",a:"The bid is the highest price a buyer is willing to pay right now. The ask is the lowest price a seller is willing to sell at right now. The difference between them is called the spread."},{q:"Why is the price I got different from the price I saw?",a:"The price on the screen is the price of the last trade. With a market order you buy at the nearest seller's price, and sometimes at a price further away. That difference is called slippage."},{q:"Which order do you use for a stop loss?",a:"A stop market: Sell Stop Market in a long and Buy Stop Market in a short. With a stop limit, the price can skip over the order in a strong move, and then you stay in the trade."},{q:"When do you use a stop limit?",a:"When you want to buy above the current price or sell below it, for example to enter only after the price breaks through a certain area."}]},T={title:"Trading styles: day trading, swing trading or long-term investing",seoTitle:"Day Trading, Swing Trading or Long-Term Investing: What's the Difference? | AntarTrade",seoDescription:"The difference between day trading, swing trading and long-term investing: holding time, risk, profit potential, screen time and the type of analysis. With a comparison table and what scalping is.",excerpt:"Long-term investing, swing or day trading? How they differ in risk, profit, screen time and type of analysis, with a table comparing all three.",category:"Trading for beginners",coverAlt:"Trading styles: day, swing and long-term",html:`
<p class="lead">There are three main styles of investing and trading in the markets: <strong>long-term investing, swing trading and day trading.</strong> The difference between them isn't just how long you hold a trade. It's also how much risk you take, how much you can make, how much time you need to spend in front of the screen, and what type of analysis fits. In this article I'll go over each one, and at the end you'll find a table comparing them.</p>

<h2>Long-term investing: "set and forget"</h2>
<p>You put the money in and look at it once a month or two. Once a quarter, when the company publishes its reports, you check that it's still good and profitable. There's almost no hands-on work.</p>
<ul>
<li><strong>The risk is low,</strong> if you invest in indices, like the <span class="en">S&amp;P 500</span> and the Nasdaq, or in big, stable companies like Apple, Microsoft and Google. Over the long term the risk is very low. Not zero, because anything can happen, but low.</li>
<li><strong>The profit potential is also relatively low,</strong> especially if you don't have a lot of money. Say you put in $100,000 and made 6% a year: that's $6,000, before tax and fees. It's nice, but it's not what will grow you fast.</li>
<li><strong>Over the years it works.</strong> Someone who puts money in every month, over many years, can see very nice growth with low risk.</li>
</ul>
<p>On the chart you look at weekly or monthly candles. A daily chart is too short a timeframe for this kind of investing. Personally, for long-term investing I really like indices: there's no hands-on work at all.</p>

<h2>Swing trading: days to weeks</h2>
<p>You buy today and sell tomorrow, in two days, in a week or two. The goal is to take a good opportunity on the chart and profit from it over a few days.</p>
<ul>
<li><strong>The analysis is mostly technical,</strong> on a daily or weekly chart. The fundamentals sit in the background: if there's a war right now and oil prices might rise, I'll take that into account. But I won't sit on reports, because it's a short period.</li>
<li><strong>The risk and the profit potential are medium.</strong> Over the long term, good companies tend to rise. In the short term you can't know: maybe you landed in a period of declines, and maybe an announcement suddenly came out that knocked the market down.</li>
<li><strong>Looking once a day is enough,</strong> to decide whether to sell or hold.</li>
</ul>
<p>It isn't as easy as it sounds. You need to stay alert so you don't miss opportunities, and the profit depends a lot on how much money you put in.</p>

<h2>Day trading: buy and sell on the same day</h2>
<p><a href="/academy/glossary#day-trading">Day trading</a> is <strong>the riskiest trading, with the highest profit potential.</strong> You can make nice "daily salaries" with it: $500, $1,000 and $2,000 a day. It's possible, for someone who knows how to do it.</p>
<ul>
<li><strong>The analysis is technical only,</strong> on one-minute, 5-minute, 15-minute and hourly charts. You can check the daily chart to understand the direction. The weekly and monthly matter less.</li>
<li><strong>The risk is high.</strong> A lot can happen within a day. Price can rise, fall and whipsaw back and forth for no reason at all.</li>
<li><strong>You have to sit on the chart,</strong> without getting up from it. Personally, I make a point of sitting an hour, an hour and a half at most every day, and leaving with the daily salary.</li>
<li><strong>It takes experience,</strong> and it's very much mental and psychological. I wrote about that side in the article <a href="/blog/trading-psychology">The mental side of trading</a>.</li>
</ul>
<p>This is mainly what I do. I also do swings and a bit of investing, but what I show on YouTube and in the courses is mainly day trading, because that's where the biggest money is. Most prop firm traders trade exactly like this: day trading futures, closed before the end of the day.</p>

<h3>And what is scalping?</h3>
<p><a href="/academy/glossary#scalping">Scalping</a> is a type of day trading. You try to take <strong>small profits with small risks,</strong> for example $50 to $100 per trade, and you take relatively many trades. The risk-reward ratio is about 1:1, sometimes even a bit less, because you're counting on a high win rate.</p>
<p>It's a method I like and use a lot, and it also suits someone who doesn't have a lot of time in front of the chart. But it suits traders who already understand the chart better. Many beginners try it and get burned: one trade loses $600, they win it back slowly with small trades, and then another big loss, until the account is blown. It demands quick decisions, and it's <strong>not for someone who struggles to cut a loss fast.</strong> If you find yourself holding a losing trade because "maybe it'll come back", it's not for you. And like any method, you start on demo.</p>

<h2>The table: the three styles side by side</h2>
<table class="rules">
<thead><tr><th></th><th>Day trading</th><th>Swing trading</th><th>Long-term investing</th></tr></thead>
<tbody>
<tr><td><strong>Holding time</strong></td><td>Minutes to hours</td><td>Days to weeks</td><td>Years</td></tr>
<tr><td><strong>Goal</strong></td><td>Fast profits on small moves</td><td>Taking short-term opportunities</td><td>Stability and steady growth</td></tr>
<tr><td><strong>Analysis</strong></td><td>Technical</td><td>Technical (and a little fundamental)</td><td>Fundamental</td></tr>
<tr><td><strong>Chart</strong></td><td>1 minute, 15 minutes, hourly</td><td>Daily, weekly</td><td>Weekly, monthly</td></tr>
<tr><td><strong>Risk</strong></td><td>Very high</td><td>Medium</td><td>Relatively low</td></tr>
<tr><td><strong>Monitoring</strong></td><td>Constant, during trading</td><td>Once a day</td><td>Once every few months</td></tr>
<tr><td><strong>Advantage</strong></td><td>High, fast profits</td><td>Good profit without sitting in front of the screen all day</td><td>Low risk, no stress and no time investment</td></tr>
<tr><td><strong>Drawback</strong></td><td>Stress and high risk, takes experience and self-control</td><td>You need to stay alert, the profit depends on the amount</td><td>Takes a long time to grow</td></tr>
</tbody>
</table>
<p>I explained which analysis fits each style in the article <a href="/blog/technical-vs-fundamental-analysis">Technical vs. fundamental analysis</a>.</p>

<div class="cta"><h2>Starting from the basics?</h2><p>Learn the foundations: <a href="/blog/long-short">long and short</a>, <a href="/blog/order-types">order types</a> and <a href="/blog/technical-vs-fundamental-analysis">the types of analysis</a>. And if you chose day trading, you can trade with a prop firm's capital: <a href="/comparison">compare the prop firms</a>.</p></div>
`,faq:[{q:"What's the difference between day trading and swing trading?",a:"In day trading you buy and sell on the same day, on minute and hourly charts. In swing trading you hold a trade from a few days to a few weeks, and look at a daily or weekly chart."},{q:"Which style is the riskiest?",a:"Day trading. It has the highest profit potential, but also the highest risk, and it takes experience and self-control."},{q:"How long do you need to sit in front of the screen in day trading?",a:"It depends on the method. I personally trade an hour to an hour and a half a day. During that time you need to be in front of the chart the whole time."},{q:"What is scalping?",a:"A type of day trading where you take small profits with small risks, and take relatively many trades. It demands quick decisions, and it's not for someone who struggles to cut a loss."},{q:"Which style do prop firm traders use?",a:"Most prop firm traders day trade futures, because at most firms you have to close your positions before the end of the trading day."}]},A={title:"Technical vs. fundamental analysis: the difference and which to use",seoTitle:"Technical vs. Fundamental Analysis: The Difference and Which to Use | AntarTrade",seoDescription:"What technical analysis is and what fundamental analysis is, who each one suits, how to combine them, and how to read a candlestick. A simple explanation for beginners.",excerpt:"Fundamental analysis looks at the company and the world, technical analysis looks at the chart. The difference, why short-term trading looks mainly at the chart, and how to read a candlestick.",category:"Trading for beginners",coverAlt:"Technical vs. fundamental analysis: what's the difference?",html:`
<p class="lead">When you analyze a stock, an index or a contract, there are two main types of analysis. <strong>Fundamental analysis</strong> looks at the company from the inside and at what's happening in the world. <strong>Technical analysis</strong> looks at the chart. In this article I'll explain the difference, why in short-term trading I look mainly at the chart, and how to read a candlestick, which is the basis of all technical analysis.</p>

<h2>What is fundamental analysis?</h2>
<p>In fundamental analysis you take a company and look at it from the inside: <strong>how much it earns, how much it spends, whether it has debt, and who its competitors are.</strong> Some companies spend far more than they earn, for example a drug company that's still developing a product. Then you check whether there are approvals, whether a trial is planned, and so on.</p>
<p>Fundamental analysis also includes <strong>what's happening in the world</strong>: wars, COVID, tension between superpowers. If there's a big event that could knock the market down, you take it into account.</p>

<h2>What is technical analysis?</h2>
<p>Technical analysis is based on <strong>the chart.</strong> You look at how price behaved in the past, and based on that you try to predict what will happen next.</p>
<p><strong>Why does it work?</strong> Say that in the past, every time the price reached 100, it flew up. That means at 100 there are lots of people willing to buy. And if every time it reached 200 it fell, there are probably lots of people willing to sell at 200. It's a market like any other: try to sell your apartment for two million and nobody buys, drop it to one million and suddenly there are plenty of buyers. Prices tend to repeat themselves, and that's how <a href="/academy/glossary#support">support</a> and <a href="/academy/glossary#resistance">resistance</a> areas form.</p>

<h2>Why I look mainly at the chart</h2>
<p>You can be the biggest genius in the world, read every financial report, and even send them to <span class="en">ChatGPT</span>. But let's be real: <strong>we have no edge in the reports.</strong> The big banks and investment houses analyze them with the best people there are, and they have direct contact with the CEOs. I won't understand the reports better than they do.</p>
<p><strong>The chart is my edge.</strong> You can't hide things from the chart. If the reports look amazing and the stock looks like the strongest one out there, but the chart is falling, as far as I'm concerned something is going on. The chart tells me the story, including what I can't know.</p>

<h2>The differences, and how to combine them</h2>
<table class="rules">
<thead><tr><th></th><th>Technical analysis</th><th>Fundamental analysis</th></tr></thead>
<tbody>
<tr><td><strong>What you look at</strong></td><td>Charts, prices, past moves</td><td>Reports, revenue, debt, news</td></tr>
<tr><td><strong>Who it suits</strong></td><td>Short-term trading: intraday, a week, up to a month or two</td><td>Anyone who wants to hold for a few quarters or more</td></tr>
</tbody>
</table>
<p>In practice you combine them: <strong>you focus on the chart, and in the background you understand what's happening in the market.</strong> If there's a war right now pushing oil prices up, or a company is about to publish its reports, you take it into account. For the long term you can put money into good companies and let it run for years. But in day trading and swing trading, only the chart. I explained which type of analysis fits which style in the article <a href="/blog/trading-styles">Trading styles: day trading, swing or long-term investing</a>.</p>
<p>And when you trade futures, as prop firm traders do, one of the "fundamental" things with the biggest intraday impact is economic releases. It's worth checking their times every morning in an economic calendar.</p>

<h2>How to read a candlestick</h2>
<p>Technical analysis starts with reading a <a href="/academy/glossary#candlestick-chart">candlestick chart</a>. Each candle shows what happened in one period, according to the chart you chose: on a 5-minute chart each candle is 5 minutes, on a daily chart each candle is a day, and on a monthly chart each candle is a month.</p>
<ul>
<li><strong>Green candle (up):</strong> the bottom of the body is the opening price, and its top is the closing price. In the example: we opened at 20 and closed at 50.</li>
<li><strong>Red candle (down):</strong> the opposite. The top of the body is the opening price, and the bottom is the close. We opened at 50 and closed at 20.</li>
<li><strong>The tails (wicks):</strong> the prices reached during the candle. In the example: we went down to 10 and also up to 60, but closed inside the body.</li>
</ul>
<p>Every candle looks different, and each one tells a story. For example, a candle with a long tail at the bottom says price fell hard during the candle, but couldn't close down there, and came back up.</p>

<div class="cta"><h2>Want to keep learning?</h2><p>Continue with the basics: <a href="/blog/long-short">long and short</a> and <a href="/blog/order-types">order types</a>. And if you want to trade with a prop firm's capital, <a href="/comparison">compare the prop firms</a>.</p></div>
`,faq:[{q:"What's the difference between technical and fundamental analysis?",a:"Technical analysis is based on the chart and on how price behaved in the past. Fundamental analysis is based on the company's financial data, like revenue, profits and debt, and on news and events in the world."},{q:"Which analysis is better?",a:"It depends on the timeframe. For day trading and swing trading, the chart is what matters. For investing over a few quarters or more, fundamental analysis fits better. In practice you combine them: focus on the chart, and take into account what's happening in the market."},{q:"Why does technical analysis work?",a:"Because prices tend to repeat themselves. If in the past many people bought at a certain price and the price rose from there, there's a chance buyers will be there next time too. That's how support and resistance areas form."},{q:"How do you read a candlestick?",a:"In a green candle the bottom of the body is the opening price and the top is the closing price. In a red candle it's the opposite. The tails show the highest and lowest prices during the candle."}]},I={title:"Overtrading: what it is, how to spot it and how to stop",seoTitle:"Overtrading: What It Is, How to Spot It and How to Stop | AntarTrade",seoDescription:"Overtrading is any action in trading that doesn't come from a plan. The signs that you're in it, and 6 simple tools to stop it: a fixed number of trades, trading hours, breaks, a checklist and a mental journal.",excerpt:"Any action in trading that doesn't come from a plan is overtrading. How to spot the signs, and 6 tools that help you stop before the account is blown.",category:"Mindset",coverAlt:"Overtrading: a trader in front of screens with dozens of buy and sell orders",html:`
<p class="lead">Overtrading is the silent killer of trading accounts. It doesn't look dangerous: one more trade, a little more time in front of the screen. But it's responsible for a large share of the accounts that get blown, even among traders who read charts very well.</p>

<h2>What is overtrading?</h2>
<p>The simplest definition: <strong>any action in trading that doesn't come from a clear plan is overtrading.</strong> You entered a trade that isn't your setup, because of an urge, pressure, impatience, a wish to win back a loss or a wish to make more. That's overtrading.</p>
<p>It shows up mainly in two things: <strong>too many trades a day</strong>, and <strong>too many hours in front of the screen</strong>. The longer you sit, the more bored you get, and out of boredom you press the button.</p>

<h2>How it happens (to everyone)</h2>
<p>You sit for three hours, waiting for a trade. Finally you get in, and the trade loses. Now you don't have the patience to wait another three hours, so you take another trade, to win it back. And another one.</p>
<p>And there's the classic trap: "the trade I'm waiting for is about to come." While you wait, you take another trade and another trade. You stay another half hour and another hour, and the trade doesn't come.</p>

<h2>The signs: how to tell you've slipped into overtrading</h2>
<ul>
<li><strong>Trade after trade, under pressure.</strong></li>
<li><strong>Losing control:</strong> entering trades in unrelated places, in the middle of a move, without a clear setup.</li>
<li><strong><span class="en">FOMO</span>:</strong> the move is running away, and you jump in because "you can't miss it".</li>
<li><strong>Playing with the stop:</strong> moving it further away when price goes against you.</li>
<li><strong>Your body is signaling:</strong> shifting uncomfortably in your chair, forcing a trade, and after the entry asking yourself "why did I get in?"</li>
</ul>

<h2>How to stop: 6 tools</h2>
<h3>1. A number of trades set in advance</h3>
<p>Three, four, five, even ten, depending on your method. What matters is that the number is set before you open the chart, not during the session.</p>
<h3>2. Fixed trading hours</h3>
<p>I, for example, trade in a fixed time window of about an hour and a half, and not beyond it. When the time is up, you get up, even if "the trade is about to come".</p>
<h3>3. A break after every loss</h3>
<p>Took a loss? Get up. Coffee, something to eat, fresh air, five to ten minutes. If you lost two trades in a row, you can close the computer for 15 minutes or half an hour. The chart will give you more opportunities, I promise.</p>
<h3>4. A checklist before every trade</h3>
<p>Why I'm getting in, how, and what I'm waiting to see happen. When you have a clear checklist, you enter only when it's met, and not "just because".</p>
<h3>5. A mental journal</h3>
<p>Besides the trade journal, also mark your mental mistakes: overtrading, trading outside your hours, trying to win back a loss, impatience. At the end of the month you see where you slip the most, and focus on improving only that. In the <a href="https://journal.antartrade.co.il" target="_blank" rel="noopener">trading journal</a> you can mark mistakes like these next to every trade.</p>
<h3>6. A trading plan</h3>
<p>All these tools come together in one written <a href="/blog/trading-plan">trading plan</a>, which you don't change in the middle of a trading day.</p>

<div class="box"><strong>The less you trade, the more you'll make</strong>People ask me: if you know how to make a thousand dollars in half an hour, why not trade four hours and make four thousand? The answer: if I sit in front of the chart for four hours, not only won't I make four thousand, I'll lose. They say trading is the hardest way to make easy money.</div>

<h2>Read more</h2>
<ul>
<li><a href="/blog/trading-psychology">The mental side of trading: why most traders lose</a></li>
<li><a href="/blog/risk-reward-1-to-3-losing-streaks">How many losses in a row to expect, and why it matters</a></li>
</ul>
`,faq:[{q:"What is overtrading?",a:"Any action in trading that doesn't come from a clear plan: a trade that isn't your setup, taken out of an urge, pressure, impatience or a wish to win back a loss. It usually shows up as too many trades a day and too many hours in front of the screen."},{q:"How many trades a day is too many?",a:"There's no single right number. What matters is setting the number in advance, according to your method, and not going beyond it during the trading day."},{q:"What do you do after a losing trade?",a:"Get up for a short break, at least a few minutes, without your phone. After two losing trades in a row it's worth stepping away from the computer for 15 minutes to half an hour, and analyzing the chart again when you come back."},{q:"How do you track mental mistakes?",a:"In a mental journal: mark every time there was a mistake like overtrading, trading outside your hours or trying to win back a loss. At the end of the month you see which mistake repeats the most, and focus on it."}]},x={title:"How to build a trading plan: what to write, and why you don't change it mid-day",seoTitle:"Trading Plan: How to Build One and What to Write in It | AntarTrade",seoDescription:"What to write in a trading plan: hours, instrument, entry conditions, size, maximum loss per trade and per day, a daily target and a number of trades. How many days it will take to reach the target, a checklist for opening the day and a mental mistakes journal.",excerpt:"A written trading plan takes emotion out of the game. What to write in it, how to calculate how many days it will take to reach the target, and why you must never change it in the middle of a trading day.",category:"Mindset",coverAlt:"Trading plan: strategy, risk management, entry and exit",html:`
<p class="lead">If there's one thing that will save you from all the mental mess of trading, it's a written trading plan. It sounds boring, but it's the foundation of success. A plan you follow like a robot takes emotion out of the game.</p>

<h2>Why do you need a trading plan?</h2>
<p>Think of someone on a diet. They have an excellent plan, but every few days they feel like a bit of chocolate and a bit of pizza. They won't get results. Trading is exactly the same.</p>
<p>And most traders know this script: you profit on Monday, Tuesday, Wednesday and Thursday, and then in one day you lose everything you made, and more, because of one mistake. In other words, you already know how to profit on most days. What's missing is something that stops that one bad day. <strong>In a written plan there's no room for emotion</strong>, so it can't cause the big mistakes.</p>

<h2>What to write in the plan</h2>
<table class="rules">
<thead><tr><th>Section</th><th>What to write</th></tr></thead>
<tbody>
<tr><td>Trading hours</td><td>A fixed time window, and you don't go beyond it. At the start you can trade more to get to know the chart, but later an hour or two a day, at most.</td></tr>
<tr><td>Instrument</td><td>What you trade: for example <span class="en">NQ</span> or <span class="en">MNQ</span>. One thing, two at most. Don't spread yourself thin.</td></tr>
<tr><td>Entry conditions</td><td>Your setup: what has to happen for you to get in. If you have several setups, write them all.</td></tr>
<tr><td>Size</td><td>How many contracts, at most. Start with small sizes.</td></tr>
<tr><td>Maximum loss per trade</td><td>For example $200 or $300. Based on this and on where the stop is, you set the size.</td></tr>
<tr><td>Maximum loss per day</td><td>A daily stop, also set in the system. The goal is not to reach it. It's there for emergencies, when the market suddenly flies.</td></tr>
<tr><td>Daily profit target</td><td>When you reach it, you stop. If you're in a winning trade that can still run, move up the stop and let it run. But once you're out, the day is over.</td></tr>
<tr><td>Number of trades a day</td><td>For example up to three or four. And you can add a rule: I lost two, I'm out.</td></tr>
<tr><td>More rules</td><td>Rules you learned the hard way. For example: never add to a losing trade, don't enter against the momentum, wait patiently and don't chase a trade.</td></tr>
</tbody>
</table>
<p>If you get stressed when you reach your stop, and it really hurts, the size is probably wrong. Lower the size. Maybe you'll reach a payout a few days later, but it will be much easier on you mentally.</p>

<h2>The most important rule: don't change the plan in the middle of a trading day</h2>
<p>You can and should improve the plan: raise or lower the number of trades, change hours, update the daily target and stop. But <strong>never in the middle of a trading day, and never in the middle of a trade</strong>, when emotion is working on you. You change it only when the chart is closed, at the end of the day, and not right after a losing day.</p>

<h2>How many days will it take to reach the target?</h2>
<p>Part of the plan is understanding the numbers. Say a $50,000 account with a $3,000 target, a $500 daily target and a $500 daily stop. What decides it is how many of your days are profitable:</p>
<table class="rules">
<thead><tr><th>Profitable days</th><th>Average profit per day</th><th>Trading days to 3,000</th></tr></thead>
<tbody>
<tr><td>75% (3 out of 4)</td><td>$250</td><td><strong>12</strong></td></tr>
<tr><td>60% (6 out of 10)</td><td>$100</td><td><strong>30</strong></td></tr>
</tbody>
</table>
<p>This calculation gives hope and a plan of action. If the win rate is low, maybe it's worth raising the daily target or lowering the daily stop, and checking again. Our <a href="/calculators">trader calculators</a> have tools for this kind of calculation.</p>

<h2>A checklist for opening a trading day</h2>
<p>Everyone builds their own, and there's no single right way. An example structure:</p>
<ol>
<li>Daily chart: what's the market's story? Direction, trend, important areas.</li>
<li>15-minute chart: the same process, at a higher resolution.</li>
<li>5-minute chart: fine-tune the levels.</li>
<li>Check a related contract too (for example <span class="en">ES</span> when you trade <span class="en">NQ</span>).</li>
<li>Check the <a href="/economic-calendar">economic calendar</a> for important releases.</li>
</ol>

<h2>A mental mistakes journal</h2>
<p>At the start of my journey I had a table on the wall with the mistakes that kept repeating for me: trading past my hour, overtrading, too many trades, too big a size, impatience. Every time I made a mistake I added a check mark, and after a few days I saw where most of the mistakes were concentrated. Then I improved exactly that thing.</p>
<p>Today you can do this in the <a href="https://journal.antartrade.co.il" target="_blank" rel="noopener">trading journal</a>, where you mark mistakes next to every trade. Every small change like this makes a big difference. Read the <a href="/blog/trading-journal-guide">trading journal guide</a> as well.</p>

<h2>Read more</h2>
<ul>
<li><a href="/blog/overtrading">Overtrading: what it is and how to stop</a></li>
<li><a href="/blog/trading-psychology">The mental side of trading</a></li>
</ul>
`,faq:[{q:"What should be in a trading plan?",a:"Fixed trading hours, what you trade, entry conditions (the setup), size, maximum loss per trade and per day, a daily profit target, a number of trades a day, and personal rules you learned from experience."},{q:"When are you allowed to change the trading plan?",a:"Only when the chart is closed, at the end of a trading day, and not right after a losing day. Never in the middle of a trading day or in the middle of a trade, because then emotion makes the decisions."},{q:"How long will it take me to pass a $50,000 evaluation?",a:"It depends on the share of profitable days. For example, with a $500 daily target and daily stop: if 75% of days are profitable, about 12 trading days. If 60%, about 30."},{q:"Why do you need both a daily stop and a maximum loss per trade?",a:"The loss per trade sets the size you enter with. The daily stop is a safety net for unusual cases, when the market suddenly jumps, and it stops a bad day before it turns into a blown account."}]},W={title:"The mental side of trading: why most traders lose (and how not to be one of them)",seoTitle:"The Mental Side of Trading: Why Most Traders Lose | AntarTrade",seoDescription:"Why everyone profits on demo and loses live, what to do after a big loss and after a big win, why consistency is the most important rule, and when to get up from the chair. From the mindset chapter of Noam Antar's course.",excerpt:"The mental side is 90% of trading. Why on demo we're all world champions, what to do after a loss and after a win, and how consistency and breaks protect the account.",category:"Mindset",coverAlt:"The mental side of trading: discipline vs. emotion",html:`
<p class="lead">I always say the mental side is 90% of trading. You can learn the technical tools in a few lessons: reading a chart, drawing lines, finding support and resistance. But what separates a trader who makes money from a trader who loses is almost always the head, not the chart.</p>

<h2>The monkey parable: why most traders lose</h2>
<p>Think of a monkey pressing a buy or sell button at a random point. What are its chances of being right? About 50%. The price either goes up or down.</p>
<p>So how is it that a monkey has a fifty-fifty chance, and most people, however smart they are, don't succeed at trading? The answer: <strong>emotions</strong>. We bring in fear, greed, the urge to win back a loss and the fear of losing a profit. These emotions turn a 50/50 chance into much less.</p>

<h2>Why on demo we're all world champions</h2>
<p>On demo everyone makes money. You get in, set a target and a stop, walk away, and come back to a profit. Live, on the same chart, with the same orders and the same numbers, suddenly everything changes. You feel like someone is "moving the chart" right to your stop.</p>
<p>The chart didn't change. <strong>The only difference between demo and a real account is in your head.</strong> On demo losing doesn't hurt, so we follow the plan. Live, fear and greed come in, and the mistakes come with them.</p>
<p>And one more thing worth remembering: a $700 loss hurts more than a $1,000 win feels good. That pain is what makes us move stops, hold losers and close winners too early.</p>

<h3>How to move from demo to a real account</h3>
<ul>
<li><strong>Start with the smallest size there is,</strong> for example one micro contract, and feel how it affects you.</li>
<li><strong>Trade real sizes on demo too.</strong> There's no point practicing with 10 contracts on demo and then trading one live.</li>
<li><strong>Always a target and a stop,</strong> both for the trade and for the whole day.</li>
<li><strong>If you're stressed inside a trade,</strong> the size is probably too big. Lower the size.</li>
<li><strong>Film yourself trading.</strong> That's how I started uploading videos to YouTube. When you watch it later, you see on your face exactly when the stress kicked in.</li>
</ul>

<h2>The problem isn't the loss, it's what you did after it</h2>
<p>A loss is part of the statistics. If you lose one trade out of three, there's no reason to be upset about one loss. The next trade will probably win. But that's only true when you're following the plan.</p>
<p>The problem starts after the loss: you want to win it back, you increase size, take random trades, get back to zero, drop again, and in the end you blow the account. We've all been there.</p>
<div class="box"><strong>Winning or failing isn't the loss itself</strong>It's how you behaved after it. Whoever said "thank you, market, see you tomorrow" won. Whoever tried to take revenge on the market, even if they won the money back that same day, will blow it next time.</div>
<h3>What to do after a big loss</h3>
<ol>
<li><strong>Stop trading that very moment.</strong> Close the computer, even if you think you'll win it all back.</li>
<li><strong>After a break,</strong> an hour or two, analyze what happened: did you get stopped out according to the plan, or was there a mental mistake (adding to a loser, overtrading, trying to win it back)?</li>
<li><strong>You can take tomorrow off too.</strong> That's fine.</li>
<li><strong>Come back with smaller sizes</strong> than usual, and let your confidence return gradually.</li>
</ol>
<p>Why is it so hard to stop? Because it feels like such a waste: you worked three days, and blew it all in one. But it's better to reach a payout a week later than to blow the account.</p>

<h2>You also need to know how to behave after a win</h2>
<p>After a big win we're also not fit to keep trading. One of two things happens: either you get aggressive ("we already made a thousand, let's make more"), or every trade is taken in fear of losing the profit. In the second case, the 800 profit turns into minus 200, you try to win it back, and you blow it.</p>
<ul>
<li><strong>A daily profit target:</strong> when you reach it, or get close to it, stop. Don't chase the last $50.</li>
<li><strong>A fixed trade size:</strong> don't increase size after wins, and not after losses either.</li>
<li><strong>Made money? Finish early.</strong> It's better to end a day feeling good. Losing a profit hurts more than a normal loss.</li>
</ul>

<h2>Consistency: the most important rule</h2>
<p>Consistency means doing the same thing every day. If you know how to make $400-500 a day, do it today, tomorrow and the day after. Losing in the same range is also fine. What isn't fine: one day making a thousand, another day losing four thousand.</p>
<p>Think about it: $300 a day looks like little when the potential is two thousand. But $300 over ten trading days is $3,000, and you can multiply that across several accounts. <strong>Trading isn't a 50-meter sprint, it's a marathon.</strong> That's also exactly what the prop firms' <a href="/academy/glossary#trading-consistency">consistency rule</a> wants to see.</p>
<h3>How to grow</h3>
<ol>
<li>Start with one account and a small size.</li>
<li>Reach a payout consistently.</li>
<li>Only then grow, gradually: to two or three accounts, then four, five, eight. Copying trades between accounts is done with <span class="en">Copy Trade</span> software.</li>
</ol>
<p>Someone who jumps from one account to twenty feels the pressure on every trade. Growing gradually keeps your head in place.</p>

<h2>Breaks: when to get up from the chair</h2>
<p>My wife says she knows I'm losing by the creaking of the chair: I start shifting uncomfortably. The body always signals before the head. The signs:</p>
<ul>
<li>Shifting uncomfortably in your chair.</li>
<li>Forcing a trade, even when the chart isn't giving one.</li>
<li>Going outside your method ("maybe I'll get in here after all").</li>
<li>After the entry you ask yourself: "why did I get into this trade?"</li>
</ul>
<p>When that happens, <strong>get up.</strong> The chart isn't going anywhere. Ten minutes, coffee, fresh air, and no phone. When you come back, analyze the chart again as if you're starting a new day. And if you can't spot the moment, schedule breaks in advance: every half hour, and after every losing trade.</p>

<h2>Don't trade without another income</h2>
<p>I get a lot of messages from people who quit their job to focus on trading. That's a mistake. Trading is a profession, and like any profession it takes time to learn. Someone who needs the payout to pay the bills won't get there, because financial pressure ruins decisions. Trade with peace of mind, with a steady income on the side.</p>

<h2>The tools that help you keep your head straight</h2>
<ul>
<li>A written <a href="/blog/trading-plan">trading plan</a> that you don't change in the middle of the day.</li>
<li><a href="/blog/overtrading">Know what overtrading looks like</a> and stop it in time.</li>
<li>A <a href="https://journal.antartrade.co.il" target="_blank" rel="noopener">trading journal</a> where you also mark mental mistakes, not just trades. At the end of the month you see where you slip the most, and improve one thing at a time.</li>
</ul>

<div class="cta"><h2>Turn it into rules</h2><p>The mental side holds when it's written down. Start with your own <a href="/blog/trading-plan">trading plan</a>, and see <a href="/blog/risk-reward-1-to-3-losing-streaks">how many losses in a row to expect</a>, so a losing streak doesn't catch you off guard.</p></div>
`,faq:[{q:"How much of trading is mental?",a:"In my opinion about 90%. You learn the technical tools relatively fast. What separates a trader who makes money from a trader who loses is the ability to follow a plan, stop in time and not let fear and greed run the trades."},{q:"Why do I make money on demo and lose on a real account?",a:"The chart and the orders are the same. The difference is emotions: on a real account, fear of losing, the urge to win back a loss and fear of losing a profit come in. Start with the smallest size there is, and grow gradually."},{q:"What do you do after a big loss?",a:"Stop trading that moment, analyze the loss after a break, and come back with smaller sizes than usual. You can also take the next day off."},{q:"Why should you stop trading after a big win?",a:"Because after a big win you tend either to get aggressive, or to trade in fear of losing the profit. Either way it's easy to lose the profit and more. A daily profit target helps you stop in time."},{q:"Can you quit your job and live only from trading?",a:"Not at the start. It takes time to learn the profession, and someone who needs the money to pay bills trades under pressure and makes bad decisions. It's best to trade with a steady income on the side."}]},S={title:"Why a 1:3 ratio burns your account: the math behind the mental collapse",seoTitle:"Why 1:3 Burns the Account: Losing Streaks by Win Rate | AntarTrade",seoDescription:"How many losses in a row to expect in 100 trades at 30%, 40%, 60% and 70% win rates, how often it repeats, and why 1:3 with a 30% win rate is dangerous for a funded account.",excerpt:"1:3 trades look great in a screenshot, but at a 30% win rate you're almost certain to go through 7 losses in a row in 100 trades. The numbers, the formula, and what it means for a funded account.",category:"Risk management",coverAlt:"A 1:3 risk-reward ratio: win rate, psychology and trading pressure",html:`
<p class="lead">Nothing looks better on Instagram than a 1:3 or 1:4 trade: buying the bottom, selling the top, a screenshot and likes. What doesn't make the photo is the road there: a loss, and another loss, and another loss. In this article we'll check in numbers what really happens over 100 trades when your win rate is low, how many losses in a row to expect, how many times it will repeat, and why it can break you mentally even before the account breaks.</p>

<!-- 1 -->
<h2>The pretty trade nobody shows you the price of</h2>
<p>Good traders who take 1:3 or 1:4 trades usually end up around a 30% to 40% win rate. That makes sense: the further the target, the fewer trades reach it. Mathematically it can be completely profitable. The problem isn't in the spreadsheet, it's in your head.</p>
<p>When you hold a trade and get stopped out, hold another one and get stopped out, again and again, the mental failure builds up. Very often, by the time the winning trade arrives, you've already done something silly: moved the stop closer, exited early, increased size to "win it back". And then even the winning trade doesn't save the result.</p>
<p>So let's talk numbers. I'm a mortgage advisor by day and a trader by night, I'm a numbers person, and I'll try not to go too deep into the math.</p>

<!-- 2 -->
<h2>How many losses in a row should you expect in 100 trades?</h2>
<p>The table shows the chance that at least once in 100 trades you'll get a losing streak of this length or longer, by win rate:</p>
<table class="rules">
  <thead><tr><th>Losses in a row</th><th>30% win rate</th><th>40% win rate</th><th>60% win rate</th><th>70% win rate</th></tr></thead>
  <tbody>
    <tr><td>5 or more</td><td>99.9%</td><td>97.6%</td><td>45.9%</td><td>15.3%</td></tr>
    <tr><td>6 or more</td><td>99%</td><td>87.3%</td><td>21.2%</td><td>4.8%</td></tr>
    <tr><td>7 or more</td><td>94.9%</td><td>68.9%</td><td>8.9%</td><td>1.4%</td></tr>
    <tr><td>8 or more</td><td>85.8%</td><td>49%</td><td>3.6%</td><td>0.4%</td></tr>
    <tr><td>10 or more</td><td>58%</td><td>20.5%</td><td>0.6%</td><td>Less than 0.1%</td></tr>
  </tbody>
</table>
<p>The numbers in this article are calculated with an exact method, so they may differ slightly from my video. The conclusion is the same.</p>
<p>Look at the 30% column: you'll almost certainly lose 7 trades in a row, and in more than half the cases you'll reach 10 consecutive losses. At a 40% win rate, 6 losses in a row are almost guaranteed.</p>
<p>Now look at a 60% to 70% win rate, the area of 1:1 trades. There even 5 losses in a row aren't guaranteed anymore, and 10 losses in a row almost never happen. That's a huge mental difference: you're not failing, failing, failing. You're failing, winning, failing, winning. You see wins along the way, and that's what keeps you in the game.</p>
<div class="box"><strong>In simple words</strong>The longest losing streak you can reasonably expect in 100 trades: about <strong>10</strong> at a 30% win rate, <strong>7</strong> at 40%, <strong>4</strong> at 60%, and <strong>3</strong> at 70%.</div>

<!-- 3 -->
<h2>How many times will the nightmare repeat?</h2>
<p>OK, you lost 8 trades in a row. Will it happen only once? Not necessarily.</p>
<p>At a 30% win rate, the simple formula says a streak of 8 losses "will happen" about 5 times in 100 trades. But it double counts streaks: if you lost trades 1 to 8 and also trade 9, it counts that as two streaks (1 to 8 and 2 to 9). When you count each separate streak once, it turns out that in 100 trades you'll get on average about <strong>1.6</strong> separate streaks of 8 losses or more. In other words, it's not rare at all for it to happen twice.</p>
<p>At a 60% win rate, by contrast, a streak of 6 losses or more will happen on average only <strong>0.24</strong> times in 100 trades. In most cases it won't happen at all, and if it does, probably just once.</p>
<p>Another mental reason to choose 1:1 or 1:1.5 trades: tighten your targets, raise your win rate. If you want to be mentally strong, this is the place to start.</p>

<!-- 5 -->
<h2>The happy side: winning streaks</h2>
<p>So far we've talked about losses. Now the opposite: what's the chance of a streak of winning trades in 100 trades?</p>
<table class="rules">
  <thead><tr><th>Wins in a row</th><th>30% win rate</th><th>40% win rate</th><th>60% win rate</th><th>70% win rate</th></tr></thead>
  <tbody>
    <tr><td>3 or more</td><td>86.4%</td><td>98.8%</td><td>Almost 100%</td><td>Almost 100%</td></tr>
    <tr><td>4 or more</td><td>43.3%</td><td>80.1%</td><td>99.9%</td><td>Almost 100%</td></tr>
    <tr><td>5 or more</td><td>15.3%</td><td>45.9%</td><td>97.6%</td><td>99.9%</td></tr>
    <tr><td>6 or more</td><td>4.8%</td><td>21.2%</td><td>87.3%</td><td>99%</td></tr>
    <tr><td>7 or more</td><td>1.4%</td><td>8.9%</td><td>68.9%</td><td>94.9%</td></tr>
  </tbody>
</table>
<p>At a 30% win rate, 6 winning trades in a row is almost a dream: less than 5%. At a 60% win rate it happens in 87% of cases, and at 70% almost always.</p>
<h3>A winning streak = a payout on the table</h3>
<p>Say you trade 1:1 with $400 of risk per trade. 6 winning trades in a row are $2,400. At some prop firms that's already a payout. And at a 60% win rate it doesn't happen just once: on average you'll get about <strong>1.8</strong> separate streaks of 6 wins or more in 100 trades, so probably twice.</p>
<p>At a 30% win rate, by contrast, the average is 0.05 such streaks. Even if it happened to you once, the chance of it repeating in the same 100 trades is almost zero.</p>

<!-- 6 -->
<h2>Same expected profit, a completely different experience</h2>
<p>Here's the point that matters most. Let's compare two traders risking $300 per trade:</p>
<ul>
  <li><strong>Trader A:</strong> 1:3 with a 30% win rate. Expected profit: 0.3 × 3 − 0.7 = <strong>+0.2R</strong> per trade, that is +$60.</li>
  <li><strong>Trader B:</strong> 1:1 with a 60% win rate. Expected profit: 0.6 × 1 − 0.4 = <strong>+0.2R</strong> per trade, also +$60.</li>
</ul>
<p>On paper, exactly the same profit. In practice, trader A can expect a streak of about 10 losses in 100 trades, and trader B a streak of about 4. Now add a funded account with a $2,000 Drawdown: 7 losses in a row at $300 already break it.</p>
<table class="rules">
  <thead><tr><th>Win rate</th><th>Chance of 7 losses in a row in 100 trades</th></tr></thead>
  <tbody>
    <tr><td>30% (1:3)</td><td><strong>94.9%</strong></td></tr>
    <tr><td>40% (1:2)</td><td><strong>68.9%</strong></td></tr>
    <tr><td>60% (1:1)</td><td><strong>8.9%</strong></td></tr>
    <tr><td>70%</td><td><strong>1.4%</strong></td></tr>
  </tbody>
</table>
<p>And that's only a consecutive streak. In practice an account can also fail from losses spread between wins, so reality is even harder. You can check this in the <a href="/calculators#survival" data-link="calculators">evaluation pass odds calculator</a>.</p>

<!-- 7 -->
<h2>Bottom line: we came to bring money home</h2>
<p>I'm not saying you can't trade 1:3. If it works for you, great. But if your win rate is so low that you break mentally, ask yourself why you came. We came to bring money home, not to take screenshots for Instagram.</p>
<p>Often when I post my trading, people tell me: "you only do scalps". True. I do what gets me the best results. I don't want to sit in front of the chart for 10 hours waiting for price to reach the sky, when I can get the same profit in a short trade with a bigger contract size. My win rate is high, and a few good winning streaks in 100 trades are enough for me. That's a lot of money, those are payouts on the table.</p>
<div class="box"><strong>My tip (Noam Antar, the author)</strong>Start working with statistics and math. That's what separates traders from gamblers. Trading can be gambling, but when you do it with the right statistics and math, it becomes a profession.</div>

<div class="cta">
  <h2>Check your own streaks</h2>
  <p>Enter your win rate, ratio, risk and Drawdown in the <a href="/calculators#streaks" data-link="streaks-calculator">losing and winning streaks calculator</a>, and see how many losses in a row to expect and whether the account will hold. And if you're buying a prop firm evaluation, the code <span class="code">ANTAR</span> gives you the highest discount.</p>
</div>

<p class="disc">This article is for information and learning only and is not investment advice. The probabilities assume independent trades with a fixed win rate; they are a model, not a forecast. Trading futures involves high risk.</p>
`,faq:[{q:"Is a 1:3 risk-reward ratio bad?",a:"Not necessarily. 1:3 with a 30% win rate gives a positive expected profit of 0.2R per trade, exactly like 1:1 with a 60% win rate. The difference is in the streaks: at a 30% win rate a streak of about 10 losses in 100 trades is reasonable, and that's very hard mentally and dangerous for an account with a small Drawdown."},{q:"How many losses in a row should I expect in 100 trades?",a:"It depends on the win rate. The longest losing streak you can reasonably expect is about 10 at a 30% win rate, 7 at 40%, 4 at 60% and 3 at 70%."},{q:"Why are the numbers in the article different from the formula 1 − (1 − q^L)^(N − L + 1)?",a:"The quick formula treats overlapping windows of trades as if they were independent, so it overstates the chance. The numbers in the article are calculated exactly, trade after trade. For example, at a 30% win rate the chance of 10 losses in a row in 100 trades is about 58%, not 93%."},{q:"How does this relate to a funded account?",a:"In an account with a $2,000 Drawdown and $300 of risk per trade, 7 losses in a row fail the account. At a 30% win rate the chance of such a streak in 100 trades is about 95%, and at a 60% win rate only about 9%."}]},L={title:"How to pass a prop firm evaluation: the beginner's way and the fast way for advanced traders",seoTitle:"How to Pass a Prop Firm Evaluation: For Beginners and Advanced Traders (2026) | AntarTrade",seoDescription:"How to pass a prop firm evaluation: for beginners, fixed risk, a technical stop and statistics. For advanced traders, all in, trading news in large evaluations, and evaluations with a consistency rule, with the calculations and the risks.",excerpt:"Two ways to approach a prop firm evaluation: beginners learn cheaply from evaluations with fixed risk and statistics, and advanced traders pass fast, with the calculations and risks of each method.",category:"Guides",coverAlt:"Two ways to pass a prop firm evaluation",html:`
<p class="lead">There are two ways to approach a prop firm evaluation, and they suit two kinds of traders. Beginners need to learn from evaluations cheaply. Advanced traders who already get payouts want to pass fast and reach the funded account. In this guide I'll explain both ways, including the advantages and the risks.</p>

<h2>First of all: know the rules</h2>
<p>If you understand 100% of the prop firm's rules and what it wants from you, you've already done half the way to a payout. Before buying an evaluation, check on the firm's page: the target, the stop (intraday trailing or end of day), the maximum number of contracts, the consistency rule, the minimum trading days, and what's allowed during economic releases. You'll find an explanation of all these rules in the <a href="/blog/tik-nostro">complete guide to prop firm accounts</a>, and every firm's numbers in the <a href="/comparison">firm comparison</a>.</p>

<h2>Path 1: beginners, learn from evaluations cheaply</h2>
<p>Evaluations are the biggest gift prop firms have given traders. Until not long ago, anyone who wanted to learn to trade lost thousands of dollars of their own money and quit. Today you can learn for the cost of an evaluation. So at this stage, <strong>the goal isn't to pass fast, but to keep the evaluation alive as long as possible and learn.</strong> Passing an evaluation by luck is worth nothing, because you'll probably blow the funded account.</p>
<h3>1. Risk a small, fixed amount on every trade</h3>
<p>On a $50,000 account: about $300-500 per trade (on larger accounts, proportionally more). That way two mistakes don't blow the evaluation.</p>
<h3>2. A risk-reward ratio of at least 1:1.5</h3>
<p>For example, risk 300 to make at least 450-500.</p>
<h3>3. Technical stop first, size second</h3>
<p>You don't decide on "a 20-point stop" in advance. You find where the right stop is technically, for example below support, and calculate the size from the distance to it:</p>
<div class="box"><strong>Number of contracts = risk amount ÷ (stop distance in points × point value)</strong>For example: $400 of risk, a 100-point stop, an <span class="en">MNQ</span> contract ($2 per point): 400 ÷ (100 × 2) = 2 contracts. On platforms like <a href="/tradingview-guide">TradingView</a> you can enter the risk amount, and the size is calculated automatically.</div>
<h3>4. Build statistics</h3>
<p>When every trade risks the same amount, after a month you can see the real picture. A 50% win rate with a 1:1 ratio? Maybe try higher targets, even if the win rate drops to 40%. A very low win rate? Your trade selection probably needs work. For that you need a <a href="/blog/trading-journal-guide">trading journal</a>. It's also worth checking <a href="/blog/risk-reward-1-to-3-losing-streaks">how many losses in a row to expect</a> at your win rate.</p>
<h3>5. Patience and a plan</h3>
<p>This may be the most important thing evaluations teach you: wait for the right trade and work by a <a href="/blog/trading-plan">trading plan</a>. Start with the cheapest evaluations, with an end-of-day (EOD) stop and a 50,000 account.</p>

<h2>Path 2: advanced traders, pass an evaluation fast</h2>
<p>Traders who have already withdrawn money don't want to spend weeks on an evaluation. They want to reach the funded account and get paid. Here there are a few approaches traders use. They're legitimate, but it's important to understand the risk: <strong>you knowingly accept that some evaluations will be blown.</strong> It only pays off when the evaluations are cheap.</p>
<h3>"All in": maximum contracts and one target</h3>
<p>You enter one trade with the maximum number of contracts allowed, and a target that brings you exactly to passing the evaluation. Either the evaluation passes, or it's blown.</p>
<p><strong>How to calculate the target:</strong> (evaluation target + commissions) ÷ number of contracts ÷ $20 per point (on the <span class="en">NQ</span> contract). Multiply the result in points by 4 to get ticks, and that's how you set the target on the platform.</p>
<table class="rules">
<thead><tr><th>50,000 evaluation (3,000 target)</th><th>Contracts allowed</th><th>Move needed</th></tr></thead>
<tbody>
<tr><td>Apex, Legacy accounts</td><td>10 minis</td><td><strong>About 15 points</strong></td></tr>
<tr><td>Bulenox, trailing plan</td><td>7 minis</td><td><strong>About 21.5 points</strong></td></tr>
<tr><td>Accounts with 3-5 contracts</td><td>3-5 minis</td><td><strong>30-50 points</strong></td></tr>
</tbody>
</table>
<p>As of October 2026, Apex allows trading 10 minis only on Legacy accounts, which are still sold. On accounts that allow fewer contracts it's much harder: 15 points sometimes move in a minute, but 40-50 points need a long move. Check the exact number of contracts on each firm's page, because it changes.</p>
<p><strong>Important rules:</strong></p>
<ul>
<li><strong>Only when the market is volatile:</strong> when the <span class="en">ATR</span> is high (above 25-30 points per candle). In quiet hours the price won't reach the target.</li>
<li><strong>Enter at a good level</strong>, at support or resistance, not in the middle of a move.</li>
<li><strong>Watch the trailing stop:</strong> on an account with an intraday trailing drawdown, a trade that reached a 2,000 profit and came back can blow the evaluation, because the stop rose along with the profit.</li>
<li><strong>Careful with the template on the funded account:</strong> if you saved a template with 10 contracts on the platform, it's easy to enter with it by mistake on the funded account too.</li>
</ul>
<h3>Trading economic releases in large evaluations</h3>
<p>In large evaluations, like 250,000 or 300,000, you need a move of 30-40 points or more, and it's hard to get on a normal day. Some traders use major economic releases, when the market jumps hard, to pass.</p>
<ul>
<li><strong>Only at firms that allow it in the evaluation.</strong> Check the rules tab. You can see release times in an <a href="/economic-calendar">economic calendar</a>.</li>
<li><strong>It's a gamble.</strong> During a release the price can go up and down in seconds, and the system doesn't always "catch" the price. You can be in a big profit and get stopped out a moment later.</li>
<li><strong>Not in expensive evaluations, and not in evaluations with a consistency rule.</strong></li>
</ul>
<h3>Evaluations with a consistency rule</h3>
<p>At firms with a consistency rule in the evaluation (for example 40% or 50%), you can't pass in one day. With a 50% rule on an evaluation with a 3,000 target, your most profitable day can't exceed 1,500. An approach that works: make close to the allowed maximum in the first two days, and complete the rest of the minimum days afterward. If there was a mistake at the start, at least you didn't waste days. Check each firm's and plan's consistency rule in the <a href="/comparison">comparison</a>, and do the math in the <a href="/calculators">consistency calculator</a>.</p>

<div class="box warn"><strong>What not to do: long and short at the same time on two accounts</strong>Some traders open a long on one account and a short on another, so that "one of them passes". That's against prop firm rules, and it can lead to them refusing to pay you a payout or banning you. It also doesn't teach you to trade. Don't do it.</div>

<h2>Which path is right for you?</h2>
<ul>
<li><strong>Haven't been paid out yet?</strong> Path 1. Cheap evaluations, fixed risk, statistics and patience.</li>
<li><strong>Already been paid out, and you know how to hold a funded account?</strong> You can consider path 2, on cheap evaluations and knowing that some will be blown.</li>
</ul>
<p>Either way, the mental side decides. Read <a href="/blog/trading-psychology">The mental side of trading</a> and <a href="/blog/overtrading">Overtrading</a> as well.</p>

<div class="cta"><h2>Want to start right?</h2><p>Find the current prices, after the discount code <span class="code">ANTAR</span>, on the <a href="/promotions">deals page</a>, and compare the firms' rules side by side in the <a href="/comparison">comparison</a>.</p></div>
`,faq:[{q:"How do you pass a prop firm evaluation the first time?",a:"First learn the firm's rules. Then risk a small, fixed amount on every trade (about $300-500 on a 50,000 account), with a risk-reward ratio of at least 1:1.5, set the size by the technical stop, and work patiently by a plan."},{q:"Can you pass an evaluation in one day?",a:"At firms without a consistency rule in the evaluation, you can. Advanced traders do it with the maximum number of contracts and a calculated target, when the market is volatile. It's risky, and some evaluations get blown, so it only pays off on cheap evaluations."},{q:"How many points do you need to pass a 50,000 evaluation with 10 minis?",a:"About 15 points on NQ: the $3,000 target plus commissions, divided by 10 contracts, divided by $20 per point. As of October 2026, Apex allows 10 minis only on Legacy accounts."},{q:"Can you trade during economic releases in the evaluation?",a:"It depends on the firm. Some firms allow it in the evaluation and forbid it on the funded account. Check the rules tab on the firm's page. Even when it's allowed, it's a high-risk gamble."},{q:"Can you open a long on one account and a short on another?",a:"No. It's against prop firm rules, and it can lead to a refused payout or a ban."}]},q={title:"What is a prop firm account? The complete guide to trading a prop firm's capital (2026)",seoTitle:"What Is a Prop Firm Account? The Complete Guide to Trading a Prop Firm's Capital (2026) | AntarTrade",seoDescription:"A prop firm account is a trading account a prop firm gives you after you pass an evaluation. How it works, what it costs, how the firms make money, which rules matter and where to start.",excerpt:"What a prop firm account is, how an evaluation works, what it costs, why the funded account is still a demo and how prop firms make money. The complete guide.",category:"Guides",coverAlt:"How a prop firm account works: buy an evaluation, reach the target and keep within the stop",html:`
<p class="lead">A <strong>prop firm account</strong> (also called a "funded account") is a trading account a prop firm gives you after you pass its trading evaluation. You trade the firm's account, not your own money. If you make money, you withdraw most of the profit. If you lose, the only amount you lost is the price of the evaluation.</p>
<p>I'm Noam Antar, a futures day trader since 2019. In this guide I'll explain exactly how the model works, what it costs, how the firms themselves make money, and which rules matter most before you buy your first evaluation.</p>

<h2>Why most traders used to fail, and what changed</h2>
<p>You've probably heard that most people fail at day trading. Until a few years ago, anyone who wanted to trade had to bring tens of thousands of dollars of their own money. Up against banks, investment houses and big funds, most private traders lost that money in a short time, and quit.</p>
<p>Prop firms changed the equation. Instead of risking $20,000, you risk only the price of the evaluation. Even if you blew an evaluation, or ten evaluations, you learned a lot at a low cost, and didn't lose your savings.</p>

<h2>How does it work? Step by step</h2>
<p>Let's take a $50,000 account as an example, which is the base account at most firms:</p>
<ol>
<li><strong>Buy an evaluation.</strong> You pay once (at some firms the payment renews every month until you pass).</li>
<li><strong>Reach the target.</strong> In the example: a $3,000 profit, meaning the account has to reach 53,000.</li>
<li><strong>Keep within the stop.</strong> In the example: you can't lose $2,000. If the account drops to the stop, the evaluation is "blown".</li>
</ol>
<p>The evaluation is a <strong>demo account with real market data</strong>. The candles, moves and prices are identical to what happens on the exchange, but you don't risk real money, only the price of the evaluation.</p>
<p>After you pass the evaluation you get a <strong>funded account</strong>, and from that account you can withdraw profits.</p>

<h2>How much does a prop firm account cost?</h2>
<p>The price depends on the firm and the account size. An evaluation for a $50,000 account usually costs tens of dollars, and there are almost always deals. Every firm's current prices, after discount, are in the <a href="/comparison">prop firm comparison</a> and on the <a href="/promotions">deals page</a>. With the discount code <span class="en">ANTAR</span> (in capital letters) you always get the highest discount available at that moment.</p>
<p>Note two things:</p>
<ul>
<li><strong>Some firms charge an activation fee</strong> after you pass the evaluation, and some don't. It's listed on each firm's page.</li>
<li><strong>At the start, evaluations are a learning tool.</strong> That's why I recommend starting with the cheapest evaluations: if you blew a $20-30 evaluation, it's part of learning, not a disaster.</li>
</ul>

<h2>How do prop firms make money?</h2>
<p>This is the first question everyone asks: what's in it for them? It sounds too good to be true.</p>
<p><strong>The answer is simple: most of prop firms' revenue comes from selling evaluations.</strong> Most people buy an evaluation, blow it, and buy another one. For the firm, every blown evaluation is pure profit. It has no problem with you buying 20 evaluations. It will be very happy if you blow them all.</p>
<p>That's why the rules are built so that only consistent, disciplined traders reach a payout. It's not a scam. It's a clear business model, and once you understand it, you know exactly what to do: work by the rules, and don't give the firm the "pleasure" of another blown evaluation.</p>

<h2>Funded account: demo or real money?</h2>
<p>Here's a detail many people don't know: <strong>even after you pass the evaluation, the funded account is in most cases still a demo account.</strong> It isn't connected to the exchange.</p>
<p>Why? Because the firm knows most people who pass the evaluation will blow the funded account too. It doesn't want to lose real money on traders who haven't proven themselves yet. So it works like this:</p>
<ul>
<li><strong>If you blew the funded account,</strong> the firm didn't lose money, because it was a demo.</li>
<li><strong>If you reached a payout target,</strong> the firm pays you <strong>out of its own pocket</strong>. The money you withdraw is real money in every sense.</li>
<li><strong>A trader who proves themselves</strong> over time, with payouts and consistency, is moved at the firm's discretion to a <strong>live account</strong> connected to the real exchange.</li>
</ul>
<p>From experience: a live account isn't always an upgrade. When it's the firm's real money, the rules usually get stricter. Quite a few traders prefer to stay on the funded account and withdraw profits from it regularly.</p>
<h3>When can you withdraw money?</h3>
<p>At most firms you first need to build a <strong>safety buffer</strong> above the account size. In the $50,000 example: you reach 52,000, and what's above that you can withdraw. The firms want you to leave a buffer so the account isn't blown right after the payout. The exact thresholds for each firm and plan are in the "Payout terms" tab on the firm's page.</p>

<h2>The rules you must know before your first evaluation</h2>
<p>I always say: if you know the rules 100%, you've already done half the way to a payout. These are the four main rules:</p>
<h3>1. The trailing drawdown</h3>
<p>The stop doesn't stay in place. It <strong>rises together with your profit</strong>: you made 1,000, and the stop rose by 1,000. There are two main types:</p>
<ul>
<li><strong>Intraday trailing (<span class="en">Intraday</span>):</strong> the stop moves in real time, <strong>even on unrealized profit</strong> inside an open trade.</li>
<li><strong>End-of-day trailing (<span class="en">EOD</span>):</strong> the stop updates only by the balance you ended the day with. It gives more breathing room, so it usually suits beginners better.</li>
</ul>
<p>On the funded account the stop stops rising at a certain point. In our example it locks at 50,000 once you reach 52,000. From that moment you can keep making money without the stop chasing you.</p>
<p>📖 More in the glossary: <a href="/academy/glossary#intraday-trailing-drawdown">intraday trailing drawdown</a> · <a href="/academy/glossary#eod-trailing-drawdown">end-of-day trailing drawdown</a>. And how to see where the account's stop actually is: <a href="/blog/tradovate-drawdown">the Tradovate guide</a>.</p>

<h3>2. The consistency rule</h3>
<p>Firms don't want "gamblers" who make a huge amount in one day and withdraw. So they set a rule that one day can't be more than a certain percentage of total profits. The percentage changes from firm to firm, for example 30%, 40% or 50%, and some plans have no consistency rule at all.</p>
<p><strong>How to calculate it:</strong> your most profitable day, divided by the consistency percentage. For example: your biggest day was $1,200, and the consistency rule is 30%. 1,200 ÷ 0.3 = $4,000. That's the total profit you need to request a payout. You can calculate it in the <a href="/calculators">consistency calculator</a>.</p>
<p>My tip: set a fixed, moderate daily target, and let time do its work.</p>

<h3>3. Trading during economic releases</h3>
<p>Some firms forbid holding an open trade around major releases, like interest rates, inflation and employment data. Usually this means a few minutes before and after the release. Even where it's allowed, I don't recommend it. You can see the week's releases in an <a href="/economic-calendar">economic calendar</a>.</p>

<h3>4. Scaling limit</h3>
<p>At some firms you start with a small number of contracts, and get more contracts as the account grows. Like stairs.</p>
<p>And there are more rules worth knowing, like DCA, hedging, micro scalping and flipping. What's allowed and what isn't at each firm is in the "Rules" tab on the firm's page.</p>
<p>These rules aren't only there to protect the firm. They teach discipline, patience and risk management, and it's worth following them on a personal account too.</p>

<h2>Futures and leverage, in short</h2>
<p>Most prop firm accounts in the US trade <strong>futures</strong>, for example on the Nasdaq index (<span class="en">NQ</span>) or the <span class="en">S&amp;P 500</span> (<span class="en">ES</span>). In day trading it works exactly like a stock: there's a symbol, a chart, you buy and sell. The difference is that each contract is <strong>leveraged</strong>:</p>
<table class="rules">
<thead><tr><th>Contract</th><th>Symbol</th><th>Value of one point</th></tr></thead>
<tbody>
<tr><td>Nasdaq mini</td><td><span class="en">NQ</span></td><td><strong>$20</strong></td></tr>
<tr><td>Nasdaq micro</td><td><span class="en">MNQ</span></td><td><strong>$2</strong></td></tr>
<tr><td><span class="en">S&amp;P 500</span> mini</td><td><span class="en">ES</span></td><td><strong>$50</strong></td></tr>
<tr><td><span class="en">S&amp;P 500</span> micro</td><td><span class="en">MES</span></td><td><strong>$5</strong></td></tr>
</tbody>
</table>
<p>In other words, one <span class="en">NQ</span> contract that rises 10 points is a $200 profit. My recommendation: focus on one contract, or two at most, and don't jump between them.</p>

<h2>Which prop firm should you choose at the start?</h2>
<p>My approach:</p>
<ol>
<li><strong>Start with the firm whose evaluations are cheapest.</strong> At this stage the evaluation is a learning tool.</li>
<li><strong>Choose an end-of-day (<span class="en">EOD</span>) stop</strong> and a 50,000 account.</li>
<li><strong>Get at least one payout,</strong> and only then move to firms with more advanced payout terms.</li>
</ol>
<p>You can compare all the firms, rules, prices and payout terms in the <a href="/comparison">prop firm comparison</a>. If you're not sure what suits you, there's a short <a href="/matching-quiz">matching quiz</a>.</p>

<h2>How much can you make on a prop firm account?</h2>
<p>There's no single answer, and it's important to say it honestly: most people don't reach a payout. Those who do enjoy two advantages that regular trading doesn't have:</p>
<ul>
<li><strong>Several accounts at once.</strong> With <span class="en">Copy Trade</span> software (<a href="/replikanto-guide">Replikanto</a>, <a href="/tradesyncer-guide">Tradesyncer</a>), one trade is copied to several accounts. A $300 profit on one account becomes $3,000 on ten accounts.</li>
<li><strong>Gradual growth.</strong> One account, a first payout, and only then a second account, a third and so on.</li>
</ul>
<p>The investment is small compared to the potential, but it's a profession in every sense, and it takes time.</p>

<h2>Who it suits, and who it doesn't</h2>
<p><strong>It doesn't suit</strong> someone looking for fast money, someone who expects results within two weeks, or someone who isn't willing to lose along the way.</p>
<p><strong>It suits</strong> someone who treats it as a profession: learns, looks at charts, works by rules, and above all is patient. In my opinion it can be a side activity of about an hour a day, and it doesn't have to replace a job.</p>

<div class="cta"><h2>Want to start right?</h2><p>Learn the basics first: <a href="/blog/long-short">long and short</a> and <a href="/blog/order-types">order types</a>. Then <a href="/comparison">compare the prop firms</a> and read <a href="/blog/how-to-pass-prop-firm-evaluation">how to pass an evaluation</a>.</p></div>
`,faq:[{q:"What's the difference between a prop firm account and a regular trading account?",a:"In a regular account you trade your own money. In a prop firm account you trade a firm's account, and risk only the price of the evaluation."},{q:"Is a prop firm account a scam?",a:"Not at the well-known firms. Most of the firms' revenue comes from blown evaluations, so the rules are built so that only consistent traders reach a payout. It's important to choose a firm with a history of paying."},{q:"Is the money you withdraw real money?",a:"Yes. Even if the funded account is a demo, the payout is paid to you in real money, out of the firm's pocket."},{q:"How much does a prop firm account cost?",a:"An evaluation for a $50,000 account usually costs tens of dollars, depending on the firm and the deal. Current prices are in the prop firm comparison on the site."},{q:"Do you need experience to start?",a:"It's worth knowing the basics: candles, long and short, and order types. Start with the beginner articles on the blog."}]},$={title:"What is a footprint chart? The complete guide to reading footprint",seoTitle:"What Is a Footprint Chart? The Complete Guide to Reading Footprint | AntarTrade",seoDescription:"A footprint guide: Bid and Ask, Limit vs. Market, aggressive buyers and sellers, imbalance, delta, POC, Value Area and absorption, with screenshots and how to set it up on TradingView.",excerpt:"What you see inside a footprint candle: Bid and Ask, Limit vs. Market orders, imbalance, delta, POC, Value Area and absorption, and how to set it all up on TradingView.",category:"Order flow",coverAlt:"What is a footprint chart? The complete guide",html:`
<p class="lead">Footprint is one of the most powerful tools in the world of order flow: it shows what happened <strong>inside</strong> each candle - how much was bought and sold at every price, who was aggressive, and where there was an imbalance. In this guide we'll build the understanding from the ground up: Bid and Ask, Limit and Market orders, and then go over everything you see in a footprint candle and how to set it up on TradingView.</p>

<div class="toc"><strong>In this guide:</strong>
<ol>
  <li><a href="#bid-ask">The basics: Bid and Ask</a></li>
  <li><a href="#limit-market">Limit and Market orders - passive vs. aggressive</a></li>
  <li><a href="#read">How to read a footprint candle</a></li>
  <li><a href="#imbalance">Imbalance</a></li>
  <li><a href="#value-area">Value Area and POC</a></li>
  <li><a href="#delta">Delta</a></li>
  <li><a href="#absorption">Absorption</a></li>
  <li><a href="#tradingview">How to open and set up footprint on TradingView</a></li>
  <li><a href="#atas">Footprint in ATAS</a></li>
  <li><a href="#next">What's next</a></li>
  <li><a href="#faq">FAQ</a></li>
</ol></div>

<h2 id="bid-ask">The basics: Bid and Ask</h2>
<p>Before you read footprint, you have to understand the basics. Say the current price is 100:</p>
<ul>
  <li><strong>Bid (demand)</strong> - people who want to <strong>buy</strong>, waiting below the current price: at 99, at 98, at 97.</li>
  <li><strong>Ask (supply)</strong> - people who want to <strong>sell</strong>, waiting above the current price: at 101, at 102, at 103.</li>
</ul>
<p>It's always like this: below the price there are buyers who want to buy cheaper, and above it there are sellers who want to sell higher.</p>

<h2 id="limit-market">Limit and Market orders - passive vs. aggressive</h2>
<p>Everyone waiting on the Bid and the Ask sits in a <strong>Limit order</strong>: "buy (or sell) for me only at this specific price, and at no other price".</p>
<p>A <strong>Market order</strong> says something else: "buy for me now, this moment, at the best price available".</p>

<div class="box"><strong>Question: if the price on the chart is 100, can you buy at 100?</strong>No. There's no seller at 100 - the nearest seller is at 101. If you click <span class="en">Buy Market</span>, you get 101. And if you click <span class="en">Sell Market</span>, the sale executes against the nearest buyer - at 99.</div>

<h3>Market orders are what move the price</h3>
<p>Say there are 10 contracts at each of the levels 99, 98 and 97, and someone sends a 30-contract market sell order. There aren't enough buyers at 99, so the order "eats" 99, then 98 and then 97 - and the price falls. The same in reverse with a big market buy: it pushes the price up.</p>
<div class="pair">
  <div class="sell"><b>Market = aggressive</b>Wants the goods now, "settles" on the price - and that's what moves the market.</div>
  <div class="buy"><b>Limit = passive</b>Sits patiently and waits only for the price it chose.</div>
</div>
<p><strong>A trade happens only when a market order meets a limit order</strong> - aggressive meets passive. Two limit orders don't meet: someone who wants to buy at 99 and someone who wants to sell at 101 simply wait.</p>

<h2 id="read">How to read a footprint candle</h2>
<p>In a footprint candle there are two columns of numbers for every price level:</p>
<ul>
  <li><strong>Right column - Ask:</strong> trades in which <strong>aggressive buyers</strong> (at market) bought from passive sellers sitting in a limit order.</li>
  <li><strong>Left column - Bid:</strong> trades in which <strong>aggressive sellers</strong> (at market) sold to passive buyers sitting in a limit order.</li>
</ul>
<div class="box"><strong>A trick to remember</strong>The right side (green) = aggressive buyers. The left side (red) = aggressive sellers. It's a bit confusing, because the Ask column actually belongs to the sellers in limit orders - but what the number measures is how much was <em>bought aggressively</em> at that level.</div>
<p><strong>Read diagonally:</strong> compare the aggressive buying at a certain level with the aggressive selling at the level below it. For example, 1.83K buys against 1.87K sells - almost even.</p>

<h2 id="imbalance">Imbalance</h2>
<p>When the diagonal difference is large, there's an <strong>imbalance</strong>. For example: 491 aggressive buys against 195 sells, and 298 against 30. The platform marks levels like these (with a green line beside the candle) as an imbalance.</p>
<p>It's a real imbalance - a measured difference between buyers and sellers, not an estimate based on the shape of the candles.</p>
<p>On TradingView you can set the ratio that counts as an imbalance and how many levels in a row to mark it - we'll get to that in the settings.</p>

<h2 id="value-area">Value Area and POC</h2>
<ul>
  <li><strong>Value Area</strong> - the area in the candle where 70% of the candle's volume traded (marked with dashed lines). If a large part of the candle's move happened outside this area, it happened without much volume.</li>
  <li><strong>POC - Point of Control</strong> - the level with the highest volume in the candle (marked in white). It's a strong area worth watching.</li>
</ul>

<h2 id="delta">Delta</h2>
<p>Delta is the difference between the total of the Ask column and the total of the Bid column in the candle:</p>
<ul>
  <li>A red candle with 6.67K aggressive buys minus 7.24K aggressive sells = <strong>a negative delta of -569</strong>. A red candle with negative delta - makes sense.</li>
  <li>A green candle with 6.32K minus 4.77K = <strong>a positive delta of 1.54K</strong>.</li>
</ul>
<p>On a real footprint chart on TradingView, it all appears together - the POC, the imbalances and the delta under each candle.</p>

<h2 id="absorption">Absorption</h2>
<p>Absorption is one of the most powerful things you can spot in footprint.</p>
<p>Picture a red candle: at the top of the candle there was strong aggressive buying - 311 against 94, and 142 against 17 - and still the candle closed down. How? Because the Ask column isn't only aggressive buyers - these are buyers who bought <strong>from sellers in limit orders</strong>. Big passive sellers sat there, "absorbed" all the buying, and the price fell.</p>
<p>The same in reverse in a green candle: at the bottom of the candle there was aggressive selling - 488 against 127, and 113 against 0 - but the candle closed up, because big passive buyers in limit orders absorbed the selling.</p>

<h2 id="tradingview">How to open and set up footprint on TradingView</h2>
<p>Footprint on TradingView is a <strong>chart type</strong>, not an indicator - so don't look for it in the indicator list. It requires a Premium subscription (at the time of writing).</p>
<ol>
  <li>Open the chart type menu (where you switch between candles and a line).</li>
  <li>Choose <span class="en">Volume Footprint</span>. If it doesn't appear, search for it and mark it with a star.</li>
  <li>Zoom in on the chart to see the numbers inside the candles.</li>
</ol>
<figure><img src="/client-previews/antartrade/footer-credit/blog/footprint/fp-04.jpg" alt="A footprint chart on TradingView" loading="lazy" /></figure>
<div class="box warn"><strong>Note</strong>I teach this on TradingView because that's where footprint is easiest to see and understand visually - but the data TradingView shows in footprint isn't as accurate as in dedicated order flow software. For learning and understanding it's excellent; for trading based on footprint I work with ATAS.</div>

<h3>The important settings</h3>
<p>Double-click the candle to open the settings:</p>
<ul>
  <li><strong>Row size</strong> - automatic or manual. In manual you set how many ticks are in each row: few ticks = many detailed levels, many ticks = fewer levels. It's worth playing with this by the hour and the session (New York, London).</li>
  <li><strong>What to display</strong> - for example buy and sell, or delta.</li>
  <li><strong>Value area</strong> - the share of volume the Value Area marks (the default is 70%; 80% or 50% are possible too).</li>
  <li><strong>POC</strong> - display and color.</li>
  <li><strong>Imbalance</strong> - the ratio that counts as an imbalance. Mine is 300% (3 times). 250% is looser and will show more imbalances; 400% is stricter and will show only the significant ones.</li>
  <li><strong>Stacked levels</strong> - how many imbalances in a row are needed to mark an area. At 1, every imbalance is marked; at 3, only a run of three or more.</li>
</ul>
<figure><img src="/client-previews/antartrade/footer-credit/blog/footprint/fp-07.jpg" alt="A footprint chart on TradingView with imbalance areas marked" loading="lazy" /></figure>

<h2 id="atas">Footprint in ATAS</h2>
<p>ATAS is the order flow software I work with, and probably one of the most advanced today. It shows footprint more accurately, and you can go over a candle with a magnifying glass and see the numbers at every level. It also has a heatmap (Heat Map) that shows where the Limit orders sit in the order book.</p>
<figure><img src="/client-previews/antartrade/footer-credit/blog/footprint/fp-10.jpg" alt="A footprint chart in ATAS" loading="lazy" /></figure>
<figure><img src="/client-previews/antartrade/footer-credit/blog/footprint/fp-09.jpg" alt="The heatmap (Heat Map) in ATAS" loading="lazy" /></figure>

<h2 id="next">What's next?</h2>
<p>In this guide we got to know what you see in footprint: who's aggressive and who's passive, imbalance, POC, Value Area, delta and absorption. The next step is understanding how to use it in practice - where to look for them on the chart, and how to combine them with a strategy.</p>
<ul>
  <li><a href="/atas-guide">The complete guide to ATAS</a> - the order flow software, with its plans, prices and how to connect a funded account.</li>
  <li><a href="/deepcharts-guide">The DeepCharts guide</a> - another order flow platform, with footprint charts and market depth.</li>
</ul>

<h2 id="faq">FAQ</h2>
<dl class="faq">
  <dt>What's the difference between footprint and a regular candle?</dt>
  <dd>A regular candle shows only the open, close, high and low. Footprint also shows what happened inside the candle: how much was bought and sold aggressively at every price level.</dd>
  <dt>Do you need a paid TradingView subscription?</dt>
  <dd>At the time of writing - yes, footprint on TradingView requires a Premium subscription.</dd>
  <dt>What is delta in footprint?</dt>
  <dd>The difference between the total aggressive buying (Ask) and the total aggressive selling (Bid) in the candle.</dd>
  <dt>What is an imbalance?</dt>
  <dd>A large diagonal gap between aggressive buyers and aggressive sellers at neighboring levels, by a ratio you set (for example 3 times).</dd>
  <dt>Is TradingView's data accurate?</dt>
  <dd>Not as accurate as dedicated order flow software. TradingView is excellent for learning; for trading, software like ATAS is recommended.</dd>
</dl>

<div class="cta">
  <h2>Want to go deeper into order flow?</h2>
  <p>Read the <a href="/atas-guide">ATAS guide</a> to see the software I trade footprint with. And when buying evaluations and software - the code <span class="code">ANTAR</span>.</p>
</div>

<p class="disc">This guide is for information and learning only and is not investment advice or a recommendation to act. Trading futures involves high risk and can lead to financial loss. The numbers in the examples are for illustration.</p>
`,faq:[{q:"What's the difference between footprint and a regular candle?",a:"A regular candle shows only the open, close, high and low. Footprint also shows what happened inside the candle: how much was bought and sold aggressively at every price level."},{q:"Do you need a paid TradingView subscription?",a:"At the time of writing - yes, footprint on TradingView requires a Premium subscription."},{q:"What is delta in footprint?",a:"The difference between the total aggressive buying (Ask) and the total aggressive selling (Bid) in the candle."},{q:"What is an imbalance?",a:"A large diagonal gap between aggressive buyers and aggressive sellers at neighboring levels, by a ratio you set (for example 3 times)."},{q:"Is TradingView's data accurate?",a:"Not as accurate as dedicated order flow software. TradingView is excellent for learning; for trading, software like ATAS is recommended."}]},D={title:"The complete guide to setting a daily stop in Rithmic",seoTitle:"How to Set a Daily Stop in Rithmic: The Complete Guide | AntarTrade",seoDescription:"A step-by-step guide to setting a daily stop in Rithmic through R Trader Pro: Auto Liquidate, Loss Limit and Auto Liquidate Threshold, with screenshots.",excerpt:"A step-by-step guide to setting a daily stop in Rithmic through R Trader Pro: Auto Liquidate, Loss Limit and Auto Liquidate Threshold, with screenshots.",category:"Risk management",coverAlt:"Setting a daily stop in Rithmic",html:`
<p class="xlink">Trading through Tradovate? <a href="/blog/tradovate-daily-stop" data-link="tradovate-guide">See the guide to setting a daily stop in Tradovate</a></p>

<h2>What is a daily stop and why should you set one?</h2>
<p>A daily stop is one of the most important risk management tools in trading. Its purpose is to limit the cumulative loss during the trading day and prevent a negative trading day from turning into a significant loss that could hurt the account.</p>
<p>Unlike a <span class="en">Stop Loss</span> order, which limits the loss on a specific trade, a daily stop is there to limit the cumulative losses on the account.</p>
<p>Even experienced traders can fall into a losing streak, make decisions out of frustration or try to win back losses with more trades. This is called <span class="en">Revenge Trading</span>.</p>
<p>Setting a daily stop in advance helps you keep trading discipline, cut down on impulsive decisions and protect your capital from unusual losses.</p>
<p>A daily stop (<span class="en">Daily Loss Limit</span>) is a risk management mechanism that lets a trader preset the maximum loss they're willing to take during the trading day. In Rithmic you set it with the <span class="en">Auto Liquidate</span> mechanism, which automatically closes your positions when the account reaches the loss threshold you set.</p>

<div class="box"><strong>What is Rithmic?</strong>Like Tradovate, Rithmic connects the prop firm with the trading software. Many traders who work with order flow software, like ATAS or Bookmap, connect through Rithmic. You set the daily stop in the <span class="en">R | Trader Pro</span> software.</div>

<h2>How do you set a daily stop in Rithmic? Step by step</h2>

<h3><span class="n">1</span>Log in to R | Trader Pro and open the Trader Dashboard</h3>
<p>Open <span class="en">R | Trader Pro</span> and log in to your trading account with the login details you got from the broker or the prop firm. Open the <span class="en">Trader Dashboard</span> from the software's toolbar. This window shows the trading accounts linked to your user.</p>
<figure class="narrow"><img src="${t.url}" alt="R Trader Pro with the Trader Dashboard button on the toolbar" loading="lazy" /></figure>

<h3><span class="n">2</span>Open the risk management settings</h3>
<p>Right-click the account you want to set the daily stop on, and choose the first option, <span class="en">View Risk Parameters</span>.</p>
<figure><img src="${e.url}" alt="The Trader Dashboard in Rithmic with the right-click menu and View Risk Parameters" loading="lazy" /><figcaption>The account numbers are hidden in the picture.</figcaption></figure>

<h3><span class="n">3</span>Go to the trader's tab</h3>
<p>The window that opens has three tabs. The first two show parameters set by the broker (<span class="en">FCM Administrator</span>) and by the prop firm (<span class="en">IB Administrator</span>). Go to the third tab, <span class="en">Risk Parameters set by the Trader</span>. This is where you set your own risk limits.</p>
<figure><img src="${a.url}" alt="The Risk Parameters window in Rithmic with the Risk Parameters set by the Trader tab" loading="lazy" /></figure>

<h3><span class="n">4</span>Turn on automatic liquidation</h3>
<p>In the <span class="en">Auto Liquidate</span> column, choose <span class="en">Enabled</span>.</p>
<figure><img src="${o.url}" alt="The Auto Liquidate column in Rithmic with the Enabled option" loading="lazy" /></figure>

<h3><span class="n">5</span>Choose Loss Limit</h3>
<p>In the <span class="en">Auto Liquidate Criteria</span> column, choose <span class="en">Loss Limit</span> and click outside the field. The list also has other options, like a minimum account balance, but for a daily stop you choose <span class="en">Loss Limit</span>.</p>
<figure><img src="${n.url}" alt="The Auto Liquidate Criteria list in Rithmic with the Loss Limit option" loading="lazy" /></figure>

<h3><span class="n">6</span>Set the daily loss amount</h3>
<p>In the <span class="en">Auto Liquidate Threshold</span> column, enter the maximum daily loss. In the screenshot it's set to 500, meaning a $500 daily stop. If you want to limit it to $300, enter 300.</p>
<figure><img src="${s.url}" alt="The Auto Liquidate Threshold column in Rithmic with an amount of 500" loading="lazy" /></figure>

<h3><span class="n">7</span>Save the settings</h3>
<p>Click <span class="en">Apply</span> and confirm. It's a good idea to open the risk settings window again and make sure all the values were saved on the right account.</p>

<div class="box"><strong>My tip (Noam Antar, the author)</strong>What I always tell my students: set a daily stop, say $500, and your mission is never to reach it. That means if you've lost $400, you walk away from the computer. It's a hard mission, but if you stick to it, you'll improve a lot in everything related to risk management.</div>

<div class="cta">
  <h2>Looking for a prop firm?</h2>
  <p>On <a href="/comparison" data-link="comparison">AntarTrade</a> you'll find a comparison of the prop firms, a free trading journal, and more guides. And when buying evaluations, the code <span class="code">ANTAR</span>.</p>
</div>

<p class="disc">This guide is for information and instruction only and is not investment advice. Rithmic's settings and interface may change, and prop firms have their own risk rules. Before trading, make sure the settings were saved on the right account.</p>
`,faq:[]},P={title:"The guide to setting a daily stop and managing risk in Tradovate",seoTitle:"Daily Stop and Risk Management in Tradovate: The Complete Guide | AntarTrade",seoDescription:"How to set a daily stop in Tradovate: Daily Loss Limit, weekly limits, profit targets, locking the settings and Manual Lockout, step by step with screenshots.",excerpt:"How to set a daily stop in Tradovate: Daily Loss Limit, weekly limits, profit targets, locking the settings and Manual Lockout, step by step with screenshots.",category:"Risk management",coverAlt:"Setting a daily stop in Tradovate",html:`
<p class="xlink">Trading through Rithmic? <a href="/blog/rithmic-daily-stop" data-link="rithmic-guide">See the guide to setting a daily stop in Rithmic</a></p>

<h2>What is a daily stop and why should you set one?</h2>
<p>A daily stop (<span class="en">Daily Loss Limit</span>) is one of the most important risk management tools in trading. Its purpose is to limit the cumulative loss during the trading day and prevent a negative trading day from turning into a significant loss that could hurt the account.</p>
<p>Unlike a <span class="en">Stop Loss</span> order, which is meant to limit the loss on a specific trade, a daily stop applies to the cumulative trading results on the account.</p>
<p>Even experienced traders can fall into a losing streak, make decisions out of frustration or try to win back losses with more trades. This is called <span class="en">Revenge Trading</span>.</p>
<p>Setting a daily stop in advance helps you keep trading discipline, cut down on impulsive decisions and protect your capital from unusual losses. And when you can't stop yourself, the system does it for you.</p>

<div class="box"><strong>What is Tradovate?</strong>Tradovate is a platform that connects the prop firm (for example Apex, Take Profit or Lucid) with the trading software you trade through, like TradingView or NinjaTrader. It's where you set the account's risk limits.</div>

<p>Tradovate has two risk management tools:</p>
<ol class="toc">
  <li><strong>Risk Settings:</strong> automatic loss and profit limits, daily and weekly.</li>
  <li><strong>Manual Lockout:</strong> manually locking trading for a time you choose.</li>
</ol>

<!-- ============ PART 1 ============ -->
<h2>Part 1: setting a daily stop in Risk Settings</h2>

<h3><span class="n">1</span>Log in to Tradovate</h3>
<p>Log in to your Tradovate account and click <span class="en">Start Simulated Trading</span>. Prop firm accounts are in Simulation mode (the screen shows <span class="en">tradovate prop</span>).</p>
<figure><img src="${r.url}" alt="The Select a Trading Mode screen in Tradovate with the Start Simulated Trading button" loading="lazy" /></figure>

<h3><span class="n">2</span>Open the platform settings</h3>
<p>Once you're in, click the settings icon (<span class="en">Application Settings</span>) in the top-right corner.</p>
<figure><img src="${i.url}" alt="The Tradovate trading screen with the settings icon in the top-right corner" loading="lazy" /></figure>

<h3><span class="n">3</span>Choose the account and open Risk Settings</h3>
<p>In the settings menu, go to the <span class="en">Accounts</span> tab. If several accounts appear, find the account you want to set the daily stop on and click <span class="en">Risk Settings</span> next to it.</p>
<figure><img src="${h.url}" alt="The Accounts tab in Tradovate's settings with the Risk Settings button" loading="lazy" /></figure>

<h3><span class="n">4</span>Turn on the daily loss limit and enter the stop</h3>
<p>Find <span class="en">Daily Loss Limit</span>, turn it on with the switch next to it, and enter the daily loss amount in dollars. For example, to limit the daily loss to $300, enter 300.</p>
<figure><img src="${l.url}" alt="The Risk Settings window in Tradovate with Daily Loss Limit, Weekly Loss Limit, Daily Profit Trigger, Weekly Profit Trigger and Prevent changes" loading="lazy" /></figure>
<div class="box warn"><strong>Important: how the stop is calculated</strong>According to the explanation on Tradovate's screen, the daily loss limit is calculated on the net profit and loss (<span class="en">Net P/L</span>) from the start of the session (5 pm CDT). It includes all commissions, as well as realized and open profit and loss, and it's checked in real time. In other words, an open trade that's in a loss counts too, and commissions bring you closer to the stop.</div>
<p>When you hit the limit, your positions are closed and trading on the account is locked until the end of the session. If Tradovate's standard rules are stricter than your settings, Tradovate's rules trigger first.</p>

<h3><span class="n">5</span>The other options in the window</h3>
<p>The same window has four more options, and it's worth knowing all of them:</p>
<ul>
  <li><strong><span class="en">Weekly Loss Limit</span>, a weekly loss limit:</strong> the maximum amount you're willing to lose in a week. When you reach it, your positions are closed and trading is locked until the start of next week.</li>
  <li><strong><span class="en">Daily Profit Trigger</span>, a daily profit target:</strong> when you reach the profit you set for the day, your positions are closed and trading is locked until the next day.</li>
  <li><strong><span class="en">Weekly Profit Trigger</span>, a weekly profit target:</strong> the same at the weekly level, locked until the start of next week.</li>
  <li><strong><span class="en">Prevent changes when trading is locked by a risk setting</span>:</strong> full explanation below. This is the setting you most don't want to miss.</li>
</ul>
<div class="box"><strong>A profit target: yes or no?</strong>A profit target is a bit tricky. It closes your positions the moment you reach it, so it can stop you from continuing a trade that's going your way. On the other hand, many traders make money, keep trading, lose the profit and end up blowing the account. If that happens to you, a profit target can help.</div>

<h3><span class="n">6</span>Locking the settings: Prevent changes</h3>
<p>According to the explanation on Tradovate's screen, after the account is locked you can remove the lock at any moment, simply by raising the amount or turning the limit off. In a moment of frustration, that's exactly the last thing you want to be possible.</p>
<p>When you turn on <span class="en">Prevent changes when trading is locked by a risk setting</span>, and one of the limits locks trading, the risk settings themselves are also locked until the end of the trading day (between 4 and 5 pm CDT). That way you can't "release" yourself in the middle of the day.</p>

<h3><span class="n">7</span>Save the settings</h3>
<p>Click <span class="en">Save</span>. Make sure the options you turned on stayed on and the amounts appear on the right account.</p>

<!-- ============ PART 2 ============ -->
<h2>Part 2: manual lock with Manual Lockout</h2>
<p>Sometimes you don't need to wait for the stop. A bad day, a few losses in a row, or just a feeling that you're not at your best, and you know it's better to stop. That's what <span class="en">Manual Lockout</span> is for.</p>

<h3><span class="n">1</span>Click Manual Lockout</h3>
<p>The button is on the top bar of the trading screen, next to the account selection.</p>
<figure><img src="${d.url}" alt="The Manual Lockout button on Tradovate's top bar" loading="lazy" /></figure>

<h3><span class="n">2</span>Choose how long to lock</h3>
<p>In the window that opens, choose the lock duration in <span class="en">Select lock time</span>: until the end of the trading day (<span class="en">End of trading day</span>), 15 minutes, 30 minutes, an hour, or another time of your choice (<span class="en">Custom</span>). Then click <span class="en">Lock trading</span>.</p>
<figure class="narrow"><img src="${c.url}" alt="The Lock trading for all simulation accounts window in Tradovate with the lock time selection" loading="lazy" /></figure>
<div class="box warn"><strong>Before you lock, note</strong>
  <ul>
    <li>The lock applies to <strong>all</strong> the Simulation accounts connected to the same user, not just the account shown.</li>
    <li>Open positions are closed immediately.</li>
    <li>You can't open new trades.</li>
    <li>Trading opens again only after the time you chose is up.</li>
  </ul>
</div>

<div class="box"><strong>My tip (Noam Antar, the author)</strong>What I always tell my students: set a daily stop, say $500, and your mission is never to reach it. That means if you've lost $400, you walk away from the computer. It's a hard mission, but if you stick to it, you'll improve a lot in everything related to risk management.</div>

<div class="cta">
  <h2>Looking for a prop firm?</h2>
  <p>On <a href="/comparison" data-link="comparison">AntarTrade</a> you'll find a comparison of the prop firms, a free trading journal, and more guides. And when buying evaluations, the code <span class="code">ANTAR</span>.</p>
</div>

<p class="disc">This guide is for information and instruction only and is not investment advice. Tradovate's settings and interface may change, and prop firms have their own risk rules. Before trading, make sure the settings were saved on the right account.</p>
`,faq:[]},M={title:"How to see where your account's stop (Drawdown) is in Tradovate",seoTitle:"How to See Where Your Account's Stop (Drawdown) Is in Tradovate | AntarTrade",seoDescription:"A short guide with screenshots: how to add the Accounts window in Tradovate and see your prop firm account's Drawdown level, the point where the account is blown.",excerpt:"It's a question I get a lot: you trade a prop firm account through Tradovate and want to know where your Drawdown is. In other words, the point where, if the account reaches it, it's blown. Here's how to add it to your screen in a few minutes.",category:"Risk management",coverAlt:"Where is my account's stop in Tradovate",html:`
<p class="lead">It's a question I get a lot: you trade a prop firm account through Tradovate and want to know where your Drawdown is. In other words, the point where, if the account reaches it, it's blown. Here's how to add it to your screen in a few minutes.</p>

<h2>Step by step</h2>

<h3><span class="n">1</span>Go to the Tradovate website and click Login</h3>
<p>Go to <a href="https://www.tradovate.com/" target="_blank" rel="noopener">tradovate.com</a> and click <span class="en">LOGIN</span> at the top.</p>
<figure><img src="${p.url}" alt="The Tradovate website with the LOGIN button" loading="lazy" /></figure>

<h3><span class="n">2</span>Log in with the details from the prop firm</h3>
<p>Enter the username and password and click <span class="en">Login</span>.</p>
<figure><img src="${u.url}" alt="The Tradovate login screen with Username, Password and the Login button" loading="lazy" /><figcaption>The username is hidden in the picture.</figcaption></figure>
<div class="box"><strong>Where do you find the login details?</strong>You get the Tradovate username and password from the prop firm. For example, if you have an account with Apex, you'll find them in Apex's dashboard on their website. It works the same at the other prop firms that work with Tradovate: the details are waiting for you in your personal area on the firm's website.</div>

<h3><span class="n">3</span>Choose Simulation</h3>
<p>On the <span class="en">Select a Trading Mode</span> screen, click <span class="en">Start Simulated Trading</span>. Prop firm accounts are in Simulation mode.</p>
<figure><img src="${g.url}" alt="The Select a Trading Mode screen in Tradovate with the Start Simulated Trading button" loading="lazy" /></figure>

<h3><span class="n">4</span>Click the plus</h3>
<p>On the trading screen, click the plus button in the top-left corner.</p>
<figure><img src="${m.url}" alt="The plus button in the top-left corner of Tradovate" loading="lazy" /></figure>

<h3><span class="n">5</span>Drag Accounts onto the screen</h3>
<p>A window opens with all the tools you can add. Find <span class="en">Accounts</span>, and instead of clicking it, drag it to an empty spot on the screen and let go. Wherever you drop it, that's where it stays.</p>
<figure><img src="${y.url}" alt="The Drag &amp; Drop to Place on Dashboard window in Tradovate with the Accounts tool" loading="lazy" /></figure>
<div class="box"><strong>Note</strong>Don't click the tool, drag it. You only do this once, and the window stays on the screen next time too.</div>

<h3><span class="n">6</span>Open the settings: Select Columns</h3>
<p>The <span class="en">Accounts</span> window now shows your accounts. At the top of the window there's a settings icon (<span class="en">View Settings</span>). Click it and choose <span class="en">Select Columns</span>.</p>
<figure><img src="${w.url}" alt="The settings icon in the Accounts window in Tradovate" loading="lazy" /></figure>

<h3><span class="n">7</span>Add the Drawdown column and save</h3>
<p>The window that opens has two lists: <span class="en">Available</span> (columns you can add) and <span class="en">Visible</span> (columns that are shown). Find <span class="en">Drawdown Auto Liq Level</span> in the list and drag it to the <span class="en">Visible</span> side, next to <span class="en">Account</span>. Then click <span class="en">Save</span>.</p>
<figure class="narrow"><img src="${f.url}" alt="The column selection window in Tradovate with Drawdown Auto Liq Level and the Save button" loading="lazy" /></figure>

<h3><span class="n">8</span>That's the account's stop</h3>
<p>The <span class="en">Accounts</span> window now shows the <span class="en">Drawdown Auto</span> column. The amount in it is the Drawdown level: if the account reaches this amount, it's blown.</p>
<figure><img src="${b.url}" alt="The Accounts window in Tradovate with the Drawdown Auto column" loading="lazy" /><figcaption>The account numbers are hidden in the picture.</figcaption></figure>

<div class="box"><strong>My tip (Noam Antar, the author)</strong>This is the point you must never reach. It's worth looking at it before every trading day, and setting yourself a daily stop that leaves a margin from it.</div>

<p>Want the system to stop you before you get there? Here's <a href="/blog/tradovate-daily-stop" data-link="tradovate-guide">the guide to setting a daily stop in Tradovate</a>.</p>

<div class="cta">
  <h2>Looking for a prop firm?</h2>
  <p>On <a href="/comparison" data-link="comparison">AntarTrade</a> you'll find a comparison of the prop firms, a free trading journal and more guides. And when buying evaluations, the code <span class="code">ANTAR</span>.</p>
</div>

<p class="disc">This guide is for information and instruction only. Drawdown rules vary between prop firms and account types, and on accounts with a trailing Drawdown the level can move. Check the binding rules with your prop firm.</p>
`,faq:[{q:"What is the Drawdown on a prop firm account?",a:"The Drawdown is the minimum amount the account can drop to. If the balance reaches that amount, the account is blown and closed."},{q:"Where do you see the Drawdown in Tradovate?",a:"Add the Accounts window to the screen, and in its settings (Select Columns) add the Drawdown Auto Liq Level column. The amount in it is the account's Drawdown level."},{q:"Where do you find the Tradovate username and password?",a:"In your personal area on the prop firm's website. For example, on an Apex account the details are in Apex's dashboard."},{q:"Can the Drawdown amount change?",a:"Yes. On accounts with a trailing Drawdown (Trailing), the level rises as the account makes money. That's why it's worth checking it before every trading day."},{q:"Do you have to add the Accounts window every time?",a:"No. Once you drag it onto the screen and save the column, it stays there next time you log in."}]},C={title:"How to withdraw money from the buffer at TakeProfit: closing the account and withdrawing, step by step",seoTitle:"How to Withdraw from the Buffer at TakeProfit: Closing the Account and Withdrawing | AntarTrade",seoDescription:"A guide with screenshots: how to close an account at TakeProfit and withdraw 50% of the profits inside the buffer, when it's worth it, and what the rules are.",excerpt:"At TakeProfit you can only withdraw what's above the buffer. But there's an option many traders don't know: closing the account and withdrawing part of the money inside the buffer.",category:"Payouts",coverAlt:"Withdrawing money from the buffer at TakeProfit",html:`
<p class="lead">At TakeProfit you can only withdraw what's above the buffer. But there's an option many traders don't know: closing the account and withdrawing part of the money inside the buffer. In this article I explain the rules, when it can be useful, and show with screenshots how I actually did it.</p>

<h2>What the buffer is at TakeProfit</h2>
<p>The buffer is a safety cushion you have to build in the account before you start withdrawing. For example, on a $50,000 account the buffer is $2,000: you need to reach $52,000, and only what's above that amount can be withdrawn.</p>
<p>In other words, if the account stands at $51,000, you have nothing to withdraw in a regular payout. That $1,000 is inside the buffer.</p>

<h2>The rules: a regular payout vs. a withdrawal from the buffer</h2>
<h3>A regular payout</h3>
<p>You withdraw only what's above the buffer, with an 80/20 profit split: 80% to you and 20% to the firm. The account keeps running as usual.</p>

<h3>A withdrawal from the buffer: only when closing the account</h3>
<p>According to TakeProfit's rules, a trader may also withdraw profits from inside the buffer, but only after closing the account. In that case you get <strong>50%</strong> of the profits inside the buffer.</p>
<p>There used to be an 80% tier after 60 trading days, but it was removed. TakeProfit's official article was updated on 9.10.2026.</p>
<div class="box warn"><strong>Note</strong>Closing the account is final. Once you close it you can't trade it, reset it or access it again. Check the current rules on TakeProfit's website before you decide.</div>

<h2>When it's useful: my story</h2>
<p>I had a TakeProfit account that was above the buffer, at about $52,000. On a travel day, on the way to the airport, I decided to trade from my phone. In hindsight that was a mistake. I entered a trade, the market moved fast against me, and I got out with a big $1,578 loss.</p>
<p>The account dropped to $50,422. In other words, I had $422 left inside the buffer, which was also my distance from the account's stop.</p>
<p>I had two options: fight to save the account with $422 of room, or close it and take half of the $422. I have other accounts, so I had no reason to work hard to save this particular one. I closed it and got $211 into my wallet.</p>
<div class="box"><strong>My tip (Noam Antar, the author)</strong>If you were already high in the account and it came down, and you feel you're on your way to blowing it, you can stop while it's still in profit, close it and withdraw part of that profit. It's better to take half of the profit than to blow the account and get nothing.</div>

<h2>How to close an account and withdraw, step by step</h2>

<h3><span class="n">1</span>Click Close account</h3>
<p>In TakeProfit's dashboard (<span class="en">Control Center</span>), choose the account and click <span class="en">Close account</span> on the right side of the account card.</p>
<figure><img src="/client-previews/antartrade/footer-credit/blog/takeprofit-buffer/tp-01-account.jpg" alt="The account card in TakeProfit's dashboard with the Close account button" loading="lazy" /><figcaption>The account and login details are hidden in the picture.</figcaption></figure>

<h3><span class="n">2</span>Confirm the closing</h3>
<p>A message appears warning that after closing you won't be able to reset the account, trade it or access it, and that the action can't be undone. If you've decided, click <span class="en">YES</span>.</p>
<figure><img src="/client-previews/antartrade/footer-credit/blog/takeprofit-buffer/tp-02-confirm.jpg" alt="The confirmation window for closing a PRO account at TakeProfit with the NO and YES buttons" loading="lazy" /></figure>

<h3><span class="n">3</span>A Withdraw button appears</h3>
<p>After closing, a <span class="en">Withdraw</span> button appears instead of <span class="en">Close account</span>, and the account card shows how much is available to withdraw (<span class="en">Available for Withdrawal</span>). For me it was $422.</p>
<figure><img src="/client-previews/antartrade/footer-credit/blog/takeprofit-buffer/tp-03-withdraw-btn.jpg" alt="The account card after closing with Available for Withdrawal and the Withdraw button" loading="lazy" /></figure>

<h3><span class="n">4</span>If an error appears, wait until the next day</h3>
<p>When I tried to withdraw right after closing, I got a message that withdrawals are unavailable while the trading session is active. As with regular payouts at TakeProfit, the system updates the day after. I came back the next day, and the withdrawal went through.</p>
<figure><img src="/client-previews/antartrade/footer-credit/blog/takeprofit-buffer/tp-04-error.jpg" alt="The error message Withdrawals are unavailable while your trading session is active" loading="lazy" /></figure>

<h3><span class="n">5</span>Enter the amount and confirm</h3>
<p>In the <span class="en">Withdraw</span> window, enter the amount you want to withdraw. You don't have to withdraw it all, and you can also withdraw later. The window shows the profit split and the amount you'll receive. For me: a $422 withdrawal, of which $211 went to me, that is 50%. Click <span class="en">Confirm &amp; Withdraw</span>.</p>
<figure class="narrow"><img src="/client-previews/antartrade/footer-credit/blog/takeprofit-buffer/tp-05-withdraw.jpg" alt="The Withdraw window at TakeProfit: a withdrawal amount of 422, the profit split and the 211 received" loading="lazy" /></figure>

<h3><span class="n">6</span>The money is in the wallet</h3>
<p>Go to the wallet, and you'll see the deposit there. From there you withdraw it like any regular payout from TakeProfit.</p>
<figure><img src="/client-previews/antartrade/footer-credit/blog/takeprofit-buffer/tp-06-wallet.jpg" alt="The TakeProfit wallet with a $211 deposit in the history" loading="lazy" /><figcaption>The wallet balance and wallet number are hidden in the picture.</figcaption></figure>

<div class="cta">
  <h2>Buying a TakeProfit account?</h2>
  <p>On the <a href="/take-profit" data-link="takeprofit">TakeProfit page</a> you'll find all the rules and prices. And when buying evaluations, the code <span class="code">ANTAR</span> gives you the highest discount.</p>
</div>

<p class="disc">This article is based on the process as I actually carried it out, at the time of writing, and is for information only. It should not be seen as financial advice. TakeProfit's rules, percentages and processing times may change, so check the current terms on the firm's website before closing an account.</p>
`,faq:[{q:"Can you withdraw from the buffer without closing the account?",a:"No. In a regular payout you withdraw only what's above the buffer. A withdrawal from inside the buffer is possible only after closing the account."},{q:"How much will I get if I close the account?",a:"According to TakeProfit's rules, 50% of the profits inside the buffer. The 80% tier after 60 trading days was removed (the official article was updated on 9.10.2026)."},{q:"Can you reopen a closed account?",a:"No. Closing is final, and you can't reset the account or trade it again."},{q:"Why did I get an error when I tried to withdraw?",a:"If the message says withdrawals are unavailable while the trading session is active, you need to wait until the next day, when the system updates."},{q:"When is it worth closing an account and withdrawing from the buffer?",a:"For example when the account came down from a high, is still in profit, and you don't want to keep fighting for it. Instead of risking it until it's blown, you can close it and take part of the profit."}]},F={"long-short":k,"order-types":v,"trading-styles":T,"technical-vs-fundamental-analysis":A,overtrading:I,"trading-plan":x,"trading-psychology":W,"risk-reward-1-to-3-losing-streaks":S,"how-to-pass-prop-firm-evaluation":L,"tik-nostro":q,"footprint-guide":$,"rithmic-daily-stop":D,"tradovate-daily-stop":P,"tradovate-drawdown":M,"takeprofit-buffer-withdrawal":C};export{F as default};
