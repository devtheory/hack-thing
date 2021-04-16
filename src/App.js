import React from 'react';
import './App.css';
// import { Socket, Event } from 'react-socket-io';

const uri = 'http://localhost/test';
// const options = { transports: ['websocket'] };

class App extends React.Component {
  state = {
    google: '',
    coderpad: '',
    query: '',
    showGoogle: true,
    showCoderpad: true
  }

  handleCoderpadSourceUpdate = link => {
    this.setState({
      coderpad: link
    })
  }

  onQuery = query => {
    console.log(query);
  }

  toggleCoderpad = () => {
    this.setState({
      showCoderpad: !this.state.showCoderpad
    });
  }

  toggleGoogle = () => {
    console.log("gogole")
    this.setState({
      showGoogle: !this.state.showGoogle
    });
  }

  render(){
    return (

      <div className="row">
        
        <div id="window" className="col-md-12" >
          <div>
            <ul id="coderpad-links">
              <p>Buttons</p>
              <button onMouseOver={this.toggleCoderpad}>Notes</button>
              <button onMouseOver={this.toggleGoogle}>Excalidraw</button>
            </ul>
            {/* <iframe id="coderpad" src={this.state.coderpad} style={{border:'none', display: this.state.showCoderpad ? '' : 'none'}} height="500" width="700" ></iframe> */}
            
            { this.state.showCoderpad && <CheatSheet />}

            <IFrame id="google" src="https://excalidraw.com/#room=79f45104757a8883c939,gPGcxSTzZn3JQtsdk9Ty5Q"
              style={{'border-width':'thick',opacity:'.5',position:'absolute',left:'80px', top: '80px', display: this.state.showGoogle ? '' : 'none'}}
              height="800" width="1600"></IFrame>
          </div>
          
        </div>
        
      </div>
    );
  }
}

class IFrame extends React.Component {
  state = {
    hovered: false
  }

  handleHover = () => {
    this.setState({
      hovered: true
    })
  }

  handleOffHover = () => {
    this.setState({
      hovered: false
    })
  }
  render(){
    return(
      <iframe {...this.props }
        // style={{opacity: this.state.hovered ? '.5' : '.3', border:'none',position:'absolute',left:'0'}}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleOffHover}></iframe>
    )
  }
}

export default App;

class CheatSheet extends React.Component {
  render(){
    return(
      <div id="coderpad" className="container-fluid" style={{

        width: '100%',
        height: '900px',
        overflow: 'scroll',
        border: '1px solid #ccc',
      }}>
        <h1 id="TOC">TOC</h1>
<ul>
<li><a href="#autocomplete">Autocomplete</a></li>
<li><a href="#contentOnboarding">ContentOnboarding</a></li>
<li><a href="#ecommerceSearchPurchase">EcommerceSearchPurchase</a></li>
<li><a href="#facebook">Facebook</a></li>
<li><a href="#following">Following</a></li>
<li><a href="#googleDrive">GoogleDrive</a></li>
<li><a href="#googleMaps">GoogleMaps</a></li>
<li><a href="#likeComment">Like/comment</a></li>
<li><a href="#livestreaming">Livestreaming</a></li>
<li><a href="#liveCommenting">Live Commenting</a></li>
<li><a href="#messaging">Messaging</a></li>
<li><a href="#newsfeed">Newsfeed</a></li>
<li><a href="#notifications">Notifications</a></li>
<li><a href="#playingAnalytics">Playing/Analytics</a></li>
<li><a href="#posting">Posting</a></li>
<li><a href="#rateLimiter">RateLimiter</a></li>
<li><a href="#searchingAnalyticsTrending">Searching/Analytics/Trending</a></li>
<li><a href="#signinUp">Signin/up</a></li>
<li><a href="#stories">Stories</a></li>
<li><a href="#uberEats">Uber/Eats</a></li>
<li><a href="#urlShortner">URLShortner</a></li>
<li><a href="#webCrawler">WebCrawler</a></li>
<li><a href="#yelp">Yelp</a></li>
<li><a href="#youtube">Youtube</a></li>
</ul>
<h1 id="messaging">Messaging</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>1:1 chat only or also group chat? (both)</li>
<li>mobile, web or both? (both)</li>
<li>what scale are we looking to support? (50m DAU)</li>
<li>if group, what is group size limit?</li>
<li>what features are important? supporting attachments? (1:1, group, online, text only)</li>
<li>is there a message size limit? (100k chars)</li>
<li>end to end encryption? (no)</li>
<li>what is long term message storage requirement? (forever)</li>
</ul>
<h3 id="requirements">Requirements</h3>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>1:1 Chat</td>
<td>Low latency</td>
</tr>
<tr>
<td>Group chat</td>
<td>High availability</td>
</tr>
<tr>
<td>Online</td>
<td>low/no lag</td>
</tr>
<tr>
<td>?Sent/seen/read receipt</td>
<td>Scale</td>
</tr>
<tr>
<td>?Send text/image/video</td>
<td></td>
</tr>
<tr>
<td>Last seen</td>
<td></td>
</tr>
<tr>
<td>notifications</td>
<td></td>
</tr>
<tr>
<td>DAU</td>
<td>50m</td>
</tr>
<tr>
<td>Daily messages: DAY * 30</td>
<td>1.5b</td>
</tr>
</tbody>
</table>
<ul>
<li>support multiple devices</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<ul>
<li>in a system like this, clients wouldn&#39;t be peers.</li>
<li>would have to connect to a service that handles messages.</li>
<li><p>that service should support:</p>
<ul>
<li>receiving messages</li>
<li>relay message to right recepient</li>
<li>store messages for offline users for later retrieval</li>
</ul>
</li>
<li><p>say: so if I open the app, i have to connect with server over a protocol</p>
</li>
<li>for sender, can do this over HTTP<ul>
<li>keep-alive header to keeps persistent connection</li>
</ul>
</li>
<li>for receiver, could poll, long poll, or use websockets.<ul>
<li>poll: could be costly and most responses would be empty<ul>
<li>can&#39;t be realtime</li>
</ul>
</li>
<li>long poll: client hold connection open until server has new data or timeouts.<ul>
<li>opens new request for server to hold.</li>
<li>but sender and receiver might not connect to same server.</li>
<li>server can&#39;t know if a client disconnects.</li>
<li>can still result in wasted connection requests for inactive users</li>
</ul>
</li>
<li>websockets is great for asynch updates from server to client<ul>
<li>bi-directional communication</li>
<li>persistent</li>
</ul>
</li>
</ul>
</li>
<li>WS can support both sender/receiver flows.</li>
<li>will have to manage connections server-side</li>
</ul>
<h3 id="hld">HLD</h3>
<ul>
<li>say: we&#39;ll have some stateful services since we&#39;ll need to keep track of ws connections</li>
<li>but most will be stateless over traditional HTTP</li>
<li>draw: stuff in black</li>
</ul>
<p><img src="./images/other/messaging1.png" alt="pic"/></p>
<ul>
<li>Chat servers only keep track of connections and send/receive messages</li>
<li>Online service keeps track of online status for users</li>
<li>There might be more services on the app server tier based on needs</li>
<li>Notification service handle push notif.</li>
<li>a Database for messages.</li>
</ul>
<h3 id="storage">Storage</h3>
<ul>
<li>say: database will be interesting. There are different needs here that require a mix of relational/non</li>
<li>we have regular data like user information, preferences, friends.<ul>
<li>this is a good case for a relational database like mysql</li>
<li>sharding and replication will help us with availability and scalability</li>
</ul>
</li>
<li>then also have chat messages.<ul>
<li>we want to think about any patterns around read/write here</li>
<li>lots of data, but old messages aren&#39;t usually read.</li>
<li>might need random access of data<ul>
<li>searching, view tagged need support by data access layer</li>
</ul>
</li>
<li>one message written, one read</li>
</ul>
</li>
<li>a KV store would work well<ul>
<li>easy horizontal scaling</li>
<li>low latency data access</li>
<li>in my exp, RDMS aren&#39;t great handling long tailing of data<ul>
<li>indexes get big, random access is expensive.</li>
</ul>
</li>
<li>are widely adopted. (cassandra, hbase)</li>
</ul>
</li>
</ul>
<h3 id="data-models">Data models</h3>
<ul>
<li>say: how might the data models look?<ul>
<li>ask: would you like me to dive into the data model?</li>
</ul>
</li>
<li>1:1 message table<ul>
<li>message_id:bigint:pk, can be used for message ordering</li>
<li>sender:bigint, sender userid</li>
<li>receiver:bigint, receiver userid</li>
<li>content:text</li>
<li>created_at:timestamp, two msg can be created at same time, cant order</li>
</ul>
</li>
<li><p>group message table</p>
<ul>
<li>room_id:bigint</li>
<li>message_id:bigint, makes composite PK with room_id.<ul>
<li>can use room_id as partition key</li>
<li>since all searches in a group happen in same room.</li>
</ul>
</li>
<li>user_id:bigint, owns message</li>
<li>content:text</li>
<li>created_at:timestamp</li>
</ul>
</li>
<li><p>since messages can be created at same timestamp, messageID sets order</p>
<ul>
<li>it has to be unique </li>
<li>and be sortable by time (higher ids belong to newer rows)</li>
<li>depending on the kv we use, might not have auto incrementing</li>
<li>could use a 64bit sequence generator globally</li>
<li>but since messages belong in a group, could use local generator.</li>
<li>and would be easier to implement</li>
</ul>
</li>
</ul>
<h2 id="dive">Dive</h2>
<ul>
<li>say: i think we can deep dive into some of these components now.</li>
</ul>
<h3 id="service-discovery">Service discovery</h3>
<ul>
<li>we need to pair users to best chat server based on<ul>
<li>capacity, location, etc</li>
</ul>
</li>
<li>something like zookeeper would work nicely here.</li>
<li>every chat service register</li>
<li>zookeeper picks the best option based on the criteria</li>
<li>flow for this would be<ul>
<li>user logs in</li>
<li>load balanced to an app server (authenticated)</li>
<li>zookeeper assigns a chat server based on critera</li>
<li>user connects via ws to assigned chat service</li>
</ul>
</li>
<li>say: once connected, how do our messages flow? </li>
</ul>
<h3 id="1-1-message-flow">1:1 message flow</h3>
<ul>
<li>draw: while reading</li>
</ul>
<p><img src="./images/other/messaging2.png" alt="pic"/></p>
<ul>
<li>user A sends msg req to chat service 1</li>
<li>chat server grabs next msg id from generator<ul>
<li>say: actually, can&#39;t cache that as the order would be off</li>
</ul>
</li>
<li>we need to synchronize the data across devices so we enqueue it</li>
<li>and persist the message in the kv store.</li>
<li>if receiver is online, we can forward the message to their chat server</li>
<li>if offline, we can send notification.</li>
</ul>
<h3 id="message-synchronization">Message synchronization</h3>
<ul>
<li>we can keep messages synched between devices.</li>
<li>each device keeps track of latest messageID received.</li>
<li>new messages would either match current users id in recepient</li>
<li>or would have higher messageID</li>
<li>each device could ensure they get new messages from kv store.</li>
</ul>
<h3 id="small-group-chat-flow">small group chat flow</h3>
<ul>
<li>say: things get a bit more complex with groups.</li>
<li>we could have message go from:<ul>
<li>sender -&gt; chat server -&gt; MQ </li>
<li>where each receipient would have their own queue</li>
<li>MQ would act as inbox for the receipient.</li>
<li>each user pulls from their queue.</li>
<li>a copy per receipient can get expensive for large groups</li>
<li>anything over a few 100s (500 ok)</li>
</ul>
</li>
</ul>
<h3 id="online-prescense">Online prescense</h3>
<ul>
<li>we also want to know if a user is online or not for message delivery.</li>
<li>we talked about the online service previously</li>
<li>basically maintains a websocket connection</li>
<li>some actions would move user from online/offline and back<ul>
<li>user logins and connects to a chat service. </li>
<li>in the kv store, we could have a last_seen_at timestamp.</li>
<li>could set threshold time away from last_seen_at update is offline.<ul>
<li>this helps prevent too much change on short connection drops</li>
<li>reduces load in the service.</li>
<li>could also have a separate heatbeat check every x seconds</li>
</ul>
</li>
<li>logging out sends request to update kv.<ul>
<li>could have <code>online</code> field. true means online, false offline.</li>
</ul>
</li>
<li>we&#39;d want to fan out to friends so they know my status<ul>
<li>could use pub-sub with a channel for each friend-pair.</li>
<li>we&#39;d publish a change to each pair channel</li>
<li>this works fine for a few hundred friends (&lt; 500)</li>
<li>a massive group of thousands of people would be problematic.</li>
<li>so maybe cap friend size or fetch online status only when</li>
<li>entering a group or refreshing friend list.</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="wrap-up">Wrap up</h2>
<ul>
<li>media: compression, cloud storage, thumbnails</li>
<li>encryption: can encrypt messages so only sender/receiver can read.</li>
<li>could cache old messages on the client to reduce data transfer</li>
<li>could bring the edge closer to users and cache user data/room data closer to them.</li>
<li>error handling.<ul>
<li>if a chat server goes down, zookeeper helps provide a new server for clients.</li>
<li>could have message resend setup.<ul>
<li>queue messages to retry or</li>
<li>client retry logic</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="livestreaming">Livestreaming</h1>
<p><a href="#TOC">Up</a></p>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>Stream/view</td>
<td>Low latency</td>
</tr>
<tr>
<td>Encodings</td>
<td>High availability</td>
</tr>
<tr>
<td>Ability to store long term</td>
<td>low/no lag</td>
</tr>
<tr>
<td>Chat</td>
<td>Scale</td>
</tr>
<tr>
<td>Like signals</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>DAU</td>
<td>2b</td>
</tr>
<tr>
<td>Daily stream producers?</td>
<td></td>
</tr>
<tr>
<td>Daily stream consumers?</td>
<td></td>
</tr>
<tr>
<td>Average stream duration?</td>
</tr>
</tbody>
</table>
<blockquote>
<p>EDGE: Initial request gets streamID, URI, security token and forwards to right DC with consistent hashing.</p>
<p>DC: determined by consistent hashing streamID. Used to reconnect when broken connection (wifi-cell)</p>
<p>EDGE: groups many servers to terminate RTMPS connections on write, caches on reads</p>
<p>DC: same as EDGE but with additional host type to encode.</p>
<p>ENCODING HOSTS: authenticate stream, source of truth for stream, encodings, generate output (Dash,HLS etc), store for VOD</p>
<p>manifest file links to 1 second segments of livestream. We can update as more content is streamed.</p>
<p>2 layer caching architecture to help with unpredictability of stream popularity</p>
<p>for updates to manifest files, can use short TTL or push updates to requesting POPs (better, but harder)</p>
<p>reliability on upstream: bad connection? terminate or degrade updload quality using ABR.
    buffer on clients, or audio only</p>
<p>THUNDERING HERD: Edge cache gets multiple requests at same time, but only one makes it to DC because cache lockout timeout</p>
</blockquote>
<p><img src="./images/facebook/livestream.png" alt="Livestream"/></p>
<h1 id="stories">Stories</h1>
<p><a href="#TOC">Up</a></p>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>Post expirable story</td>
<td>Lag ok</td>
</tr>
<tr>
<td>Follow</td>
<td>High availability</td>
</tr>
<tr>
<td>Get stories from friends</td>
<td>Read heavy</td>
</tr>
<tr>
<td>Search</td>
<td>Scale</td>
</tr>
<tr>
<td>Filters? text?</td>
<td></td>
</tr>
<tr>
<td>Receipts</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>DAU</td>
<td>250m</td>
</tr>
<tr>
<td>Stories per day: DAU * 5</td>
<td>1.2b</td>
</tr>
<tr>
<td>Stories per second</td>
<td>~14,000</td>
</tr>
</tbody>
</table>
<blockquote>
<p>24hr delete: Create task when posting to clean up inboxes of that story
    stagger deletes to avoid spikes.
push vs pull: push on regular. pull for famous.</p>
</blockquote>
<p><img src="./images/facebook/stories.png" alt="Stories"/></p>
<h1 id="facebook">Facebook</h1>
<p><a href="#TOC">Up</a>
Could be used for <strong>IG</strong> by using:
DAU: 300m
Posts per day (3 per user on avg): 900m
Posts per second: 10,400  </p>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>Post image/video/link</td>
<td>Read heavy</td>
</tr>
<tr>
<td>Like/comment/share</td>
<td>Fast rendering, posting</td>
</tr>
<tr>
<td>Add friends</td>
<td>Lag is ok</td>
</tr>
<tr>
<td>See timeline</td>
<td>Access pattern (hot eventually becomes cold)</td>
</tr>
<tr>
<td>See user&#39;s posts/profile</td>
<td>Global</td>
</tr>
<tr>
<td>Activity log</td>
<td>Scale</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>DAU</td>
<td>2b</td>
</tr>
<tr>
<td>Images updated p/s</td>
<td>9m</td>
</tr>
<tr>
<td>text posts p/s</td>
<td>18m (2x more than images)</td>
</tr>
<tr>
<td>comments p/s</td>
<td>30m</td>
</tr>
</tbody>
</table>
<blockquote>
<p>make comment: might be tough to cache everything with these numbers</p>
</blockquote>
<h1 id="signinUp">Signin/up</h1>
<p><a href="#TOC">Up</a></p>
<p><img src="./images/twitter/signin:up.png" alt="Signin/up"/></p>
<h1 id="posting">Posting</h1>
<p><a href="#TOC">Up</a></p>
<p><img src="./images/twitter/tweeting.png" alt="Posting"/></p>
<h1 id="likeComment">Like/comment</h1>
<p><a href="#TOC">Up</a></p>
<p><img src="./images/facebook/like:comment.png" alt="Like/comment"/></p>
<h1 id="following">Following</h1>
<p><a href="#TOC">Up</a></p>
<p><img src="./images/twitter/follow.png" alt="Following"/></p>
<h1 id="newsfeed">Newsfeed</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>is this for mobile, web app, or both?</li>
<li>What are important features we need to cover? (post, see friends post on newsfeed)</li>
<li>Is the newsfeed sorted chronological descending order? (yes)</li>
<li>How many friends can I have? (5000)</li>
<li>What traffic can we expect? (10m DAU)</li>
<li>would this be just text or include media? (can include media)</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>Might not need if got good numbers above! skip next!</li>
</ul>
<h4 id="instagram-numbers">Instagram numbers</h4>
<p>Could be used for <strong>IG</strong> by using:
DAU: 300m
Posts per day (3 per user on avg): 900m
Posts per second: 10,400  </p>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>Post image/video/link</td>
<td>Read heavy</td>
</tr>
<tr>
<td>See newsfeed</td>
<td>Fast rendering, posting</td>
</tr>
<tr>
<td>Add friends</td>
<td>Lag is ok</td>
</tr>
<tr>
<td>Like/comment/share</td>
<td>Access pattern (hot eventually becomes cold)</td>
</tr>
<tr>
<td>See user&#39;s posts/profile</td>
<td>Global</td>
</tr>
<tr>
<td>Activity log</td>
<td>Scale</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>DAU</td>
<td>2b</td>
</tr>
<tr>
<td>Images updated p/s</td>
<td>9m</td>
</tr>
<tr>
<td>text posts p/s</td>
<td>18m (2x more than images)</td>
</tr>
<tr>
<td>comments p/s</td>
<td>30m</td>
</tr>
</tbody>
</table>
<ul>
<li>say: might be tough to cache everything with these numbers</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<ul>
<li><p>say: there are two big components here:</p>
<ul>
<li>Adding a post<ul>
<li>need to persist in the database and possibly cache</li>
</ul>
</li>
<li>building the newsfeed<ul>
<li>aggregation of relevant posts to present</li>
</ul>
</li>
</ul>
</li>
<li><p>say: we&#39;ll need many APIs to support our app. Two important ones are:</p>
<ul>
<li>createPost: HTTP POST request with the post payload.<ul>
<li>status, token, media or links</li>
<li>POST /api/v1/newfeed</li>
</ul>
</li>
<li>getNewsfeed: HTTP GET to fetch newsfeed for a user    <ul>
<li>token</li>
</ul>
</li>
</ul>
</li>
<li><p>say: what might this look like at a high level?</p>
</li>
<li>draw:</li>
</ul>
<p><img src="./images/other/newsfeed1.png" alt="pic"/></p>
<ol>
<li>Clients can view a newsfeed on mobile/web.<ul>
<li>can post through the API at /api/v1/newsfeed with their content</li>
</ul>
</li>
<li>LB distributes the load accross servers</li>
<li>Servers forward traffic to the right services</li>
<li>Post service: Stores post in db and caches it. </li>
<li>Fanout service: pushes new content to relevant feeds. Cache helps with fast retrieval.<ul>
<li>(postId, userID mapping) to save memory instead of all post content stored</li>
<li>can set configurable limit per user in cache, get rest from db</li>
<li>since most users care about recent stuff. </li>
</ul>
</li>
<li><p>Notification service: Handles push notifications for new content.</p>
</li>
<li><p>say: to fetch the newsfeed (then add stuff in purple)</p>
</li>
<li>send GET to /api/v1/newsfeed</li>
<li>load balanced to an available app server</li>
<li>server forwards to news service instance</li>
<li>newsfeed service fetches newsfeed from cache </li>
<li>Newsfeed cache stores newdfeed IDs for quick retrieval.</li>
</ol>
<h2 id="dive">Dive</h2>
<h3 id="newsfeed-posting-deep-dive">Newsfeed posting deep dive</h3>
<ul>
<li><p>say: lets dive deeper into the posting flow with app server and fanout service</p>
</li>
<li><p>app servers: handle authentication and rate limiting.</p>
<ul>
<li>user should be authorized before creating a post</li>
<li>we want to prevent abuse by ensuring we place reasonable limit on posting.</li>
<li>draw: the green text on app servers.</li>
</ul>
</li>
<li>fanout service: distributes the post to the relevant newsfeeds<ul>
<li>say: what is relevant?</li>
<li>it needs to figure out who my friends are</li>
<li>then get their data (see if I&#39;m muted to avoid populating that newfeed)</li>
<li>and distribute the post to their newsfeeds</li>
<li>could be a lot so we want to distribution to be fire and forget</li>
<li>we can enqueue an event with the friends list and postID</li>
<li>draw: boxes in green.</li>
</ul>
</li>
<li>fanout service could be a hybrid between on-write and on-read.<ul>
<li>users with few followers could have their post pushed into their friends newsfeed</li>
<li>users with many could require followers to pull their updates.</li>
<li>could flag users as famous, active, inactive and determine what model to use for each.</li>
<li>consistent hashing could help us handle distribution of data more evenly.</li>
</ul>
</li>
</ul>
<h3 id="newsfeed-retrieval-deep-dive">Newsfeed retrieval deep dive</h3>
<ul>
<li>say: let&#39;s think about how we wanna handle fetching the newsfeed.</li>
<li>User sends request for newsfeed</li>
<li>request is load balanced to an app server</li>
<li>app server calls the newsfeed service to fetch newsfeed</li>
<li>newsfeed service gets list of postIDs from the newsfeed cache</li>
<li>we need to enrich the response since we just have a list of postIDs<ul>
<li>each post has content, a user reference we can use</li>
<li>draw: orange lines from newsfeed service</li>
</ul>
</li>
<li>response is returned as JSON to the client for rendering</li>
<li>any media can be fetched from a CDN<ul>
<li>draw: CDN in orange</li>
</ul>
</li>
</ul>
<h2 id="wrap-up">Wrap up</h2>
<ul>
<li>say: there is so much we could talk about here.</li>
<li>post service could produces kafka event for live users get new tweets via sockets</li>
<li>db and caches (cassandra, redis), MQ(kafka) are critical and should be optimized (TTL)</li>
<li>can use cassandra to store previous timelines for infinite scroll.</li>
</ul>
<p><img src="./images/twitter/timeline.png" alt="NewsfeedGeneration"/></p>
<h1 id="searchingAnalyticsTrending">Searching/Analytics/Trending</h1>
<p><a href="#TOC">Up</a></p>
<blockquote>
<p>Elastic search uses Lucene to help with relevance ranking.</p>
<p>hadoop can feed spark cluster to profile users and graph weight job</p>
<p>Spark partitions data, calc top k for each partition w/ heap.</p>
<p>then merges the lists in a reduce step</p>
</blockquote>
<p><img src="./images/twitter/search:trending.png" alt="Search"/>
<img src="./images/twitter/tracking.png" alt="Search"/></p>
<h1 id="contentOnboarding">ContentOnboarding</h1>
<p><a href="#TOC">Up</a></p>
<blockquote>
<p>CDNs: could be peers in network. Each gets chunk from S3 and they fill up the rest amongst themselves</p>
</blockquote>
<p><img src="./images/netflix/onboarding.png" alt="ContentOnboarding"/></p>
<h1 id="playingAnalytics">Playing/Analytics</h1>
<p><a href="#TOC">Up</a></p>
<p><img src="./images/netflix/play:analytics.png" alt="Playing"/></p>
<h1 id="notifications">Notifications</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>in house or service?</li>
<li>multiple channels? (email, sms, inapp)</li>
<li>what are supported devices?</li>
<li>what deploys a notification? scheduled? services?</li>
<li>Priority?</li>
<li>Rate limiter?</li>
<li>A/B testing</li>
<li>can users opt out of notifications or channels/devices?</li>
<li>real time?</li>
<li>How many notifications are we looking to send daily? say: will write for horizontal scalability</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>send notifications</li>
<li>track analytics (opens, messages sent)</li>
<li>extensible</li>
<li>durable and reliable. (can&#39;t lose notification data)</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<h3 id="notification-types">Notification types</h3>
<h4 id="ios">iOS</h4>
<ul>
<li>Say: App sends request to APNS and it delivers to iOS device.</li>
<li><p>so really 3 pieces to work with here</p>
</li>
<li><p>App: builds the notification request and passes to APNS.</p>
</li>
<li>we&#39;ll need to pass a device token (to id device) and payload.</li>
<li><p>ask: would you like me to dive into what that payload might look like?</p>
<ul>
<li>&quot;aps&quot;: <ul>
<li>&quot;alert&quot;:<ul>
<li>&quot;title&quot;: &quot;New job posting&quot;, </li>
<li>&quot;body&quot;: &quot;Facebook just posted new job&quot;,</li>
<li>&quot;action-loc-key&quot;: &quot;View&quot; </li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>APNS: provided by apple.</p>
</li>
<li><p>iOS: device that receives the notification.</p>
</li>
<li><p>say: for android devices, similar flow except using something like Firebase cloud messaging</p>
</li>
</ul>
<h4 id="sms">SMS</h4>
<ul>
<li>can use commercial service like Twilio and others. App -&gt; SMS service -&gt; Device</li>
</ul>
<h4 id="email">Email</h4>
<ul>
<li>can use own SMTP servers or third party provider like SendGrid. App -&gt; Email service -&gt; inbox</li>
</ul>
<h3 id="building-rolodex">Building rolodex</h3>
<ul>
<li>Need to mint device tokens, phone numbers, emails to notify.</li>
<li>can gather this during signup process or app install.</li>
<li>store in a relational db since it won&#39;t need to be updated much.</li>
<li>users can have multiple devices to device tokens should be stored separately.</li>
</ul>
<h3 id="hld">HLD</h3>
<ul>
<li>notification producers can be microservices like:<ul>
<li>Account service: password resets, etc</li>
<li>Billing: payment reminders</li>
<li>Engagement: marketing, new content reminders, etc</li>
</ul>
</li>
<li>or a distributed system like:<ul>
<li>a bulk messaging system: Uses user signals with analytics to make recommendations</li>
</ul>
</li>
<li>or just a cron job that processes scheduled notifications</li>
<li>write:<ul>
<li>Notification producers 1..N arrow point to</li>
<li>Notification system point to multiple</li>
<li>Notification handlers (Email, SMS, in-app (could break into ios, android))</li>
</ul>
</li>
<li>say: we talked about the notification producers already</li>
<li>notification system provides APIs and preps payloads for the notification handlers</li>
<li><p>nofication handlers handle delivery of messages. should be written with pluggin in mind</p>
<ul>
<li>might want to support multiple SMS or mobile notif. provider</li>
<li>some as fallback or country restriction</li>
<li>we also should have some sort of feedback service with webhooks </li>
<li>to handle retries or hard bounces requiring user action.</li>
</ul>
</li>
<li><p>we want to think about avoiding Single POFs and will use microservices</p>
</li>
<li>microservices will help us scale horizontally and we&#39;ll keep state out of services</li>
<li>message queues will help us in a few places.</li>
</ul>
<h3 id="detailed-design">Detailed design</h3>
<p><img src="./images/other/notification.png" alt="pic"/></p>
<ul>
<li>Producers: microservices using the notification service API to send notifications.</li>
<li>Notification services: microservice with APIs for:<ul>
<li>send notifications. requires authorization to prevent spam.</li>
<li>validates recepient details</li>
<li>gather information needed to build payload</li>
<li>Enqueues into the right queue for processing</li>
<li>ask: would you like me to dive into what that payload might look like?<ul>
<li>for an email, might look like this:</li>
<li>&quot;to&quot;: [<ul>
<li>&quot;userID&quot;: 1
], </li>
</ul>
</li>
<li>&quot;from&quot;:<ul>
<li>&quot;email&quot;: &quot;jose@facebook.com&quot;, </li>
</ul>
</li>
<li>&quot;subject&quot;: &quot;clever subject&quot;, </li>
<li>&quot;content&quot;: [<pre><code>  * <span class="hljs-string">"type"</span>: <span class="hljs-string">"text/plain"</span>, 
  * <span class="hljs-string">"value"</span>: <span class="hljs-string">"clever body"</span>
</code></pre>  ] </li>
</ul>
</li>
<li>Cache stores device tokens, user addresses, maybe templates</li>
<li>Cache miss hits DB for same data above</li>
<li>MQs: help us decouple components and act like buffers to help with load.<ul>
<li>one MQ per type help us scale independently and protect from outages. make more resilient.</li>
</ul>
</li>
<li>Notification handlers: Consume events from their respective queue and push to right provider.</li>
</ul>
</li>
<li>say: so the flow for a notification would be<ul>
<li>service calls notification service via their API</li>
<li>notification service pulls metadata needed to build payload from cache or DB.<ul>
<li>notification channel preferences</li>
<li>user information</li>
<li>device tokens</li>
</ul>
</li>
<li>notification service produces the right type of event for the right queue (email to email queue)</li>
<li>notification handlers consume events from their queues and retry if needed on certain cases</li>
<li>handlers pull required template and enrich payload and pass to the required third party providers</li>
<li>providers deliver notification </li>
</ul>
</li>
</ul>
<h3 id="additional-points">Additional points</h3>
<ul>
<li>say: the retries are supported by the notification database where we can store the message before attempting to send.</li>
<li>will only retry a set number of times.</li>
<li>say: since we&#39;re distributed, there is posibility of notifications being sent more than once.<ul>
<li>the eventID would uniquely id a notification event. </li>
<li>we could check to see if a handler has seen this eventID and if so, drop the message.</li>
<li>this should reduce likelyhood but I hesitate to say it guarantees it.</li>
</ul>
</li>
<li>push vs pull: can separate so inapp messages are pulled and rest are pushed</li>
<li>request tracing helps customer support find where user notifications died.</li>
<li>all ends up in elastic search cluster for visibility</li>
<li>bulk notifications: can talk to query engine who searches elastic, consults other consumers
  like rules, fraud, search.</li>
<li>user transaction service pulls from kafka and stores in elastic.
  “notify all milk buyers of sale, etc”</li>
</ul>
<h1 id="googleMaps">GoogleMaps</h1>
<p><a href="#TOC">Up</a></p>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>Identify roads, routes</td>
<td>High availability</td>
</tr>
<tr>
<td>Distance and ETA between A &amp; B</td>
<td>Good accuracy</td>
</tr>
<tr>
<td></td>
<td>Fast</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>MAU</td>
<td>1B</td>
</tr>
<tr>
<td>Companies using gmaps</td>
<td>5m</td>
</tr>
<tr>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p>Problems: traffic, weather, road conditions</p>
<p>Model: Grid squares with coordinates. Use coordinates to find grid square.</p>
<p>Representation: weighted directed graph. edge weights are distance, ETA, avg speed?
    can use Infinity as weight for one way street. </p>
<p>Travel calculation: shortest path djikstra, or floyd-warshall cache result. get avg from live users on street.
    Traffic tiers (low, med, high), weather (good, bad) helps calc. avg speed by percentage.
    can use historical values to predict ETA for day/time
    if ETA increases by certain %, recalculate route</p>
<p>Area search finds POI</p>
<p>Nav tracking service tracks route deviations too</p>
<p>segment service returns segments for start and end points to graph service. </p>
<p>graph processing service if same, can djikstra and return path or read from cache. otherwise fanout to get info about 
    roads, live traffic (if no info available, asks historical data service)
third party data manager service pushes updates into graph service to update live traffic (weather, accidents etc)</p>
<p>spark streaming consumer from kafka, helps get name of roads coming up and helps with voice on device</p>
<p>analytics: verify ETA accuracy, third party info, roads recommended but rarely taken (problem with it?), hot spots, 
    home/work location, frequent places/types of places.</p>
</blockquote>
<p><img src="./images/google/location:analytics.png" alt="GoogleMaps"/>
<img src="./images/google/navigation.png" alt="Navigation"/></p>
<h1 id="uberEats">Uber/Eats</h1>
<p><a href="#TOC">Up</a></p>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>See cabs</td>
<td>Global</td>
</tr>
<tr>
<td>ETA/estimate price</td>
<td>Low latency</td>
</tr>
<tr>
<td>Book cab</td>
<td>High availability</td>
</tr>
<tr>
<td>Location tracking</td>
<td>High consistency</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>MAU</td>
<td>100m</td>
</tr>
<tr>
<td>Daily rides</td>
<td>14m</td>
</tr>
</tbody>
</table>
<blockquote>
<p>heat map: spark streamer consumes kafka “no driver” events and creates heat map(surge)</p>
<p>fraud engine: detect drivers with passenger and driver accounts driving together</p>
</blockquote>
<p><img src="./images/uber/rider:driver:payment.png" alt="rider:driver:payment"/></p>
<h1 id="ecommerceSearchPurchase">EcommerceSearchPurchase</h1>
<p><a href="#TOC">Up</a></p>
<table>
<thead>
<tr>
<th>FR</th>
<th>NFR</th>
</tr>
</thead>
<tbody>
<tr>
<td>Seach</td>
<td>Low latency</td>
</tr>
<tr>
<td>Cart/wish list</td>
<td>High availability (search sacrifice consitency)</td>
</tr>
<tr>
<td>Checkout</td>
<td>High consistency (sacrifice availability for inventory)</td>
</tr>
<tr>
<td>View orders</td>
<td></td>
</tr>
<tr>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p>User homepage: talks to Recommendation service, if new/not signed in, offers generic recs. </p>
<p>Item service sits on mongoDB NOSQL because items have different attributes</p>
</blockquote>
<p><img src="./images/amazon/search.png" alt="Search"/>
<img src="./images/amazon/purchase.png" alt="Purchase"/></p>
<blockquote>
<p>Race condition: Expiry callback at same time as payment success.</p>
<p>if payment success comes first, just remove order entry from redis as optimization.</p>
<p>if expiry comes first, can refund customer or place new order marked placed.</p>
<p>clearing after succ/fail reduces chances of this. and reduce memory consum.</p>
<p>expiry isn&#39;t automatic and record might be in redis after exp. could use diff approach if removal is critical. 
can use queue and poll every x seconds.</p>
<p>purchasing last of a type produces deletedItem event. Search consumer consumes and could removes from ESC.</p>
<p>viewing orders: can get deets from archival svc and order processor.</p>
<p>notification svc can consume kafka and send notifications.</p>
</blockquote>
<h1 id="rateLimiter">RateLimiter</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>Server-side or client-side rate limiter?</li>
<li>Throttle based on? IP, user identifier, etc?</li>
<li>What scale are we expected to handle?</li>
<li>are we Operating in a distributed environment?</li>
<li>Stand alone server or app code?</li>
<li>Let users know theyre throttled?</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>Limit request quantity in excess</li>
<li>Low latency with little to no drag on http response time</li>
<li>Use memory efficiently</li>
<li>Distributed env and can handle requests from multiple servers</li>
<li>Show errors to users affected</li>
<li>High fault tolerance. Should not affect overall system if it malfunctions.</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<ul>
<li>Client-side: we might not own client, also client-side limiter can be hacked.</li>
<li>Server-side: way to go. as middleware. send err 429 too many requests error when exceeded.</li>
<li>Could implement in the API gateway, if supported (not using 3rd party which might limit us)</li>
</ul>
<h3 id="possible-algorithms">Possible algorithms</h3>
<ul>
<li>(1) Token bucket: Commonly used. One bucket per throttled endpoint per user. token refilled every x time.
  requests go through if bucket has tokens. each req consumes 1 token. No tokens == request dropped.
  Pros: easy, memory efficient, supports traffic bursts.
  Cons: might be difficult to tune params of bucket size &amp; refill rate.</li>
<li>Leaking bucket: Similar, but requests processed at fixed rate and a FIFO queue is used. 
  Params are queue size and outflow rate. 
  Pros: Memory efficient. Good when stable outflow rate is needed
  Cons: Traffic burst fills queue with old requests. recent ones are rate limited. Tough to tune as well.</li>
<li>Fixed window counter: Timeline broken into segments. # of requests allowed within that segment.
  can result in requests passing through if traffic burst happens around edges.</li>
<li>Sliding window log: Fixes con above. Can use sorted redis set. removes old timestamps when new request arrives.
  add new request timestamp to cache. Accept request if size is same or lower than allowed count.
  Pro: very accurate and won&#39;t allow excess calls.
  Cons: memory consumed unnecesarily for timestamps that might hang around after expiring if within count.</li>
<li>Sliding window counter: hybrid of above two.</li>
</ul>
<h3 id="hld">HLD</h3>
<ul>
<li>At high level, need counter to track # requests from same IP, or other constraint. If counter &gt; limit, disallow.</li>
<li><p>Will need to store but disk is too slow. In memory Redis would work better. Fast and time-based expiration. Can use INCR command to increase by 1 and EXPIRE to timeout counter and auto-delete.</p>
</li>
<li><p>Client sends req. to rate limiter middleware</p>
</li>
<li>RLM gets counter. Checks if limit reached.
 if reached, rejects.
 else, counter incremented and req. forwarded to app servers.</li>
</ul>
<p><img src="./images/other/rateLimiter1.png" alt="rateLimiter1"/></p>
<h2 id="dive">Dive</h2>
<ul>
<li>think: We don&#39;t know where the rules come from. Where do we keep them?</li>
<li>think: what to do with throttled requests.</li>
</ul>
<h3 id="rules">Rules</h3>
<ul>
<li>say: rules are generally just config files like yml. maybe something like this:</li>
<li>say: key/value pairs describing domain and descriptors.<pre><code class="lang-yml"><span class="hljs-symbol">domain:</span> authentication
<span class="hljs-symbol">descriptors:</span>
<span class="hljs-symbol">  key:</span> authentication_action 
<span class="hljs-symbol">  value:</span> signin 
<span class="hljs-symbol">  rate_limit:</span>
<span class="hljs-symbol">      unit:</span> minute
<span class="hljs-symbol">      requests_per_unit:</span> <span class="hljs-number">3</span>
</code></pre>
</li>
<li>this rule prevents users from signing in more than 3 times in a minute</li>
</ul>
<h3 id="handling-throttling">Handling throttling</h3>
<ul>
<li>We&#39;ll throw a 429 err for throttled requests. </li>
<li>Could use a MQ to queue them and attempty later depending on the case (system overload).</li>
<li>Rate limiter returns HTTP headers to clients:
  X-Ratelimit-Remaining
  X-Ratelimit-Limit
  X-Ratelimit-Rety-After: sent when a 429 is returned.</li>
</ul>
<h3 id="detailed-design">Detailed design</h3>
<p><img src="./images/other/rateLimiter2.png" alt="rateLimiter2"/></p>
<ol>
<li>Rule workers read rules from disk as needed and populate cache. 
 Requests hit rate limiter and:</li>
<li>RLM pulls rules from cache. Gets counter and last req. timestamp from redis. </li>
<li>Based on response, if not limited, forward to API servers.
 else, return 429 and drop or enqueue request for later.</li>
</ol>
<h3 id="rate-limiting-in-distributed-environment">Rate limiting in distributed environment</h3>
<ul>
<li>Since operating in distributed environment, need to watch for race conditions and synchronization issues.</li>
</ul>
<h4 id="race-condition">Race condition</h4>
<ul>
<li>can happen in highly concurrent env.</li>
<li>two requests reading count concurrently get same value and off by one.</li>
<li>locks would help but slow down system. </li>
<li>could use a sorted set in Redis to address this. (how?)</li>
</ul>
<h4 id="synchronization-issue">Synchronization issue</h4>
<ul>
<li>when multiple RLs are used (needed to support millions of users), must synchronize.<ul>
<li>could use sticky sessions to stick user to same limiter. but not scalable or flexible. </li>
<li>could use centralized data store like redis. all RL read from same redis.</li>
</ul>
</li>
</ul>
<h3 id="performance-optimization">Performance optimization</h3>
<ul>
<li>latency would be high since users hit same servers from all over.</li>
<li>should consider multi-data center strategy. move edge closer to users.</li>
<li>could synch data in eventual consitency. </li>
</ul>
<h3 id="monitoring">Monitoring</h3>
<ul>
<li>we want to monitor health of system.</li>
<li>is rate limiting algo effective?</li>
<li>are the rules effective? If dropping too many valid req, maybe relax rules. </li>
<li>black friday type events make limiter innefective, move to burst friendly RL algo like token bucket.</li>
</ul>
<h2 id="wrap-up">Wrap up</h2>
<ul>
<li>say: we RL at layer 7 but could limit at other layers. <ul>
<li>like by IP address using Iptable at layer 3?</li>
</ul>
</li>
<li>say: If I own client, should ensure:<ul>
<li>Cache to avoid frequent calls.</li>
<li>adhere to limit and avoid sending too many requests.</li>
<li>Code handles exceptions well and recovers. </li>
<li>Tune back off time to retry appropriately. </li>
</ul>
</li>
</ul>
<h1 id="urlShortner">URLShortner</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>How would you use this shortner? how does it work?</li>
<li>Safe to assume we might generate around 100m urls per day? (yes)</li>
<li>How long should URLs be? (shortest possible)</li>
<li>What characters are valid in the url? (alphanumeric)</li>
<li>Can they be modified or deleted? (no)</li>
<li>Expirable? (no)</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>Shortening: longUrl -&gt; shortUrl</li>
<li>Fetching long: shortUrl -&gt; longUrl</li>
<li>Highly available - otherwise can&#39;t redirect</li>
<li>Scale - handles millions requests per day</li>
<li>Fault tolerance consideration</li>
<li>Durable - data must not be lost</li>
</ul>
<h3 id="estimation">Estimation</h3>
<ul>
<li>write: 100m URLs per day<ul>
<li>100m / 24 / 3600 = ~1,160 new urls</li>
</ul>
</li>
<li>read:<ul>
<li>say: probably read heavy. 10:1. 11,600 redirects</li>
</ul>
</li>
<li>data: Assume 5 years storage req.<ul>
<li>100m <em> 365 </em> 5 = 182.5b records</li>
<li>Assume avg URL length 100bytes (ASCII)</li>
</ul>
</li>
<li>store: 365B <em> 100 bytes </em> 5 = 182.5TB</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<h3 id="api-endpoints">API Endpoints</h3>
<ul>
<li><p>POST api/v1/urls/:longUrl where longUrl is the param.</p>
<ul>
<li>returns a shortUrl.</li>
</ul>
</li>
<li><p>GET api/v1/shortUrl</p>
<ul>
<li>returns longUrl for HTTP redirect. (301 code)</li>
</ul>
</li>
</ul>
<h3 id="hld">HLD</h3>
<ul>
<li>Visiting a valid shortUrl returns 301 in response with location: longUrl for redirect.</li>
<li>Since we aren&#39;t modifying urls, a 301 tells browser to cache that. Further requests skip server.</li>
<li><p>Otherwise, use 302 if changes r possible or we need more granular analytics. (click rate, source)</p>
</li>
<li><p>think: a hash table would work here. key is shortUrl and longUrl is hashed into value.</p>
</li>
<li>Hashing function is 1:1, must be hashed to only one value</li>
<li>hashed value maps back to longUrl.</li>
</ul>
<h2 id="dive">Dive</h2>
<h3 id="data-model-dive">Data model dive</h3>
<ul>
<li>say: Storing this in memory would be too much.</li>
<li>say: I think RDMS would work best here.</li>
<li>write: id, shortUrl, longUrl</li>
</ul>
<h3 id="hash-function-dive">Hash function dive</h3>
<ul>
<li>say: hash function is a bit more interesting.</li>
<li>say: will use that to long -&gt; short and back.</li>
<li><p>say: from requirements, alphanumeric. </p>
<ul>
<li>10 nums, 26 upper, 26 lower = 62 possible characters</li>
<li>since we need to support 182.5b records, we find smallest <code>n</code> that makes 62^n exceed that (182.9b)</li>
<li>N = 7, ~ 3.5 trillion</li>
</ul>
</li>
<li><p>say: hash with collision resolution would work here</p>
</li>
<li><p>say: or just base64 it.</p>
</li>
<li><p>say: Hashing it using something like MD5 would result in longer than needed.</p>
</li>
<li>say: Cutting that to fit could result in collisions though. </li>
<li>say: could deal with collision by appending predefined str at end until no collisions found</li>
<li>would have to query db for every insertion</li>
<li><p>say: maybe a bloom filter would help here but I still think base62 is best.</p>
</li>
<li><p>base62: makes sense since we have 62 possible chars.</p>
</li>
<li>length isnt fixed. needs unique ID generator</li>
<li>collision impossible since ID unique</li>
<li>but if we increment ID by 1 every time, easly guessed. authorization?</li>
</ul>
<h3 id="url-shortening-dive">URL shortening dive</h3>
<ul>
<li><p>say: let&#39;s go over the shortening flow now:</p>
</li>
<li><p>input longUrl</p>
</li>
<li>check if it exists in db<ul>
<li>if it does, someone created it already. just return it.</li>
</ul>
</li>
<li>Generate unique ID, run through base62<ul>
<li>unique ID generator is distributed</li>
</ul>
</li>
<li>Store ID, longUrl, shortUrl in db</li>
</ul>
<h3 id="url-shortening-dive">URL shortening dive</h3>
<p><img src="./images/other/tinyurl.png" alt="pic"/></p>
<ol>
<li>Click on shortUrl.</li>
<li>LB forwards requests to app servers</li>
<li>Check if cached and if so, return.</li>
<li>Get from db and return if not cached. If not found, typo?</li>
</ol>
<h3 id="rate-limiting-in-distributed-environment">Rate limiting in distributed environment</h3>
<h4 id="race-condition">Race condition</h4>
<h4 id="synchronization-issue">Synchronization issue</h4>
<h3 id="performance-optimization">Performance optimization</h3>
<h3 id="monitoring">Monitoring</h3>
<h2 id="wrap-up">Wrap up</h2>
<ul>
<li>Prevent abuse: rate limiter to avoid floods from same IP or rules.</li>
<li>scaling app servers is straight forward as they are stateless.</li>
<li>can scale DB by sharding and replicating data</li>
<li>analytics: could track clicks, sources, time of day, etc.</li>
<li>health: can monitor health by tracing all requests and adding logs/metrics to long term storage<ul>
<li>and something like elastic serch for searching later.</li>
</ul>
</li>
</ul>
<h1 id="webCrawler">WebCrawler</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>What are we crawling? (search engine index)</li>
<li>How many pages are we collecting? monthly? (1B)</li>
<li>What file types are we supporting? just HTML? PDFs, images? (HTML)</li>
<li>Is there a storage requirement for the pages crawled? (5 years)</li>
<li>What about pages with duplicate content? (ignore)</li>
<li>Probably want to crawl edited pages or new ones?</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>Scalable. Must be efficient and support paralell work</li>
<li>Robust. Must manage unresponsive servers, crashes, Badly formatted HTML, malicious links, etc.</li>
<li>Good internet citizen. Respect robots.txt, keep num of requests to a site reasonable</li>
<li>Extensible. Should be easy to support diff file types later with min changes.</li>
</ul>
<h3 id="estimation">Estimation</h3>
<ul>
<li>1b pages a month.</li>
<li>1b/30 days/ 24 hrs / 3600 = ~400</li>
<li>peak 400 * 2 = ~800</li>
<li>average page size = 500k</li>
<li>storage: 1b * 500k = 500TB</li>
<li>long term : 500TB <em> 12 months </em> 5 = 30PB</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<h3 id="hld">HLD</h3>
<ol>
<li>Seed Urls<ul>
<li>Need to be smart here to maximixe links to crawl.</li>
<li>Maybe by category (technology, art), location</li>
<li>all about splitting up the crawl space into smaller chunks</li>
</ul>
</li>
<li>Url processor<ul>
<li>Has queue to stores Urls for downloading</li>
</ul>
</li>
<li>HTML fetcher<ul>
<li>Gets Urls from processors and downloads the pages.</li>
</ul>
</li>
<li>DNS service<ul>
<li>Translates url to IP address.</li>
</ul>
</li>
<li>Content processor<ul>
<li>Validates HTML to determine viability.</li>
<li>Can discard malformed files</li>
</ul>
</li>
<li>Duplicate detection service<ul>
<li>helps eliminate redundancy and cut on time wastage.</li>
<li>instead of checking char by char, can compare page hashes.</li>
</ul>
</li>
<li>DB Content<ul>
<li>Data too big to fit in memory</li>
<li>Can store most data in SSD and cache popular content</li>
</ul>
</li>
<li>URL scraper/filter<ul>
<li>Grabs URLs from the content.</li>
<li>excludes blacklisted sites, file types, bad links, etc.</li>
</ul>
</li>
<li>URL service<ul>
<li>Keeps track of visited/queued URLs.</li>
<li>Key/value store + bloom filter</li>
</ul>
</li>
<li>URL DB<ul>
<li>Stores visited URLs</li>
</ul>
</li>
</ol>
<p><img src="./images/other/webcrawler.png" alt="pic"/></p>
<h2 id="dive">Dive</h2>
<h3 id="dfs-vs-bfs">DFS vs BFS</h3>
<ul>
<li>say: Web is digraph, pages are nodes, links are edges.</li>
<li>say: Crawling is a graph traversal. can be performed with something like DFS/BFS</li>
<li>say: DFS might not be optimal as the depth would be too far.</li>
<li>say: BFS would be better suited.</li>
<li>say: might break one of our requirements though.</li>
<li>say: pages link themselves which would trigger many paralell calls.</li>
<li>say: bad internet citizen.</li>
<li>say: We need to prioritize URLs as well.</li>
<li>say: the URL processor might be a good place for this.</li>
</ul>
<h3 id="url-processor">URL processor</h3>
<ul>
<li><p>For the good internet citizen</p>
<ul>
<li>we want to avoid spamming a site with too many requests</li>
<li>can be seen as a DoS attack</li>
<li>we want to dl one page at a time per host.</li>
<li>can add delay between downloads</li>
<li>maybe keep map of website hostname: download worker thread</li>
<li>separate FIFO queue per worker thread</li>
<li><p>only fetches urls from that queue.</p>
</li>
<li><p>ask: would you like me to sketch this out?
<img src="./images/other/webcrawler2.png" alt="pic"/></p>
</li>
<li><p>Queue manager: Ensures each queue has urls from same host</p>
</li>
<li>host: queue map: Maps host to queue. (facebook.com -&gt; Q1)</li>
<li>queues: only contain urls from same host</li>
<li>worker threads: downloads pages one at a time w/ optional delay.</li>
</ul>
</li>
<li><p>For priority</p>
<ul>
<li>an about page us or contact us page is less important than a landing page.</li>
<li>Can prioritize pages based on importance</li>
<li>this can be meassured by traffic, edit frequency, external ranking algo (PageRank)</li>
<li>a Priority service could handle this for each URL</li>
<li>takes url as input, computes priority</li>
<li>dumps into queues assorted by priority</li>
<li><p>workers read urls from queues, bias toward higher priority.</p>
</li>
<li><p>ask: would you like me to sketch this out?
<img src="./images/other/webcrawler3.png" alt="pic"/></p>
</li>
<li>Output of this goes into the previous system for good internet citizen behavior</li>
</ul>
</li>
</ul>
<h3 id="freshness">Freshness</h3>
<ul>
<li>say: we will have to recrawl pages periodically<ul>
<li>bcos they&#39;re edited, added new, deleted.</li>
</ul>
</li>
<li>we can optimize this by:<ul>
<li>recrawl based on update history of a page.</li>
<li>Prioritize URLs to recrawl important pages first, more frequently</li>
</ul>
</li>
</ul>
<h3 id="storage-for-url-processor">Storage for URL processor</h3>
<ul>
<li>say: for storage, we couldn&#39;t keep this all in memory. too much. hundreds of millions.<ul>
<li>not durable or scalable</li>
<li>disk is too slow and can become bottleneck for crawl.</li>
<li>we can use hybrid approach. store Most on urls on disk.</li>
<li>reduce db reads/writes using memory buffers for enqueue/dequeue ops.</li>
<li>write data from buffers into disk periodically.</li>
</ul>
</li>
</ul>
<h3 id="html-fetcher">HTML fetcher</h3>
<ul>
<li>we want to follow the pages robots.txt file as part of good internet citizen.</li>
<li><p>to avoid repeat dl of that file, can cache the results periodically.</p>
</li>
<li><p>For high performance, we distribute crawl jobs to multiple servers</p>
</li>
<li>each server runs multiple threads</li>
<li>each downloader worker is responsible for subset of urls</li>
</ul>
<h3 id="dns-service">DNS service</h3>
<ul>
<li>DNS service is bottleneck. Requests might take long due to their nature.</li>
<li>response time ranges from 10ms to 200ms.</li>
<li>a thread calling the DNS service blocks other threads from doing so</li>
<li>caching DNS results would help here. </li>
<li>cache keeps domainName: IP address mapping and is updated regularly via cron.</li>
</ul>
<h3 id="locality">Locality</h3>
<ul>
<li>Distribute servers geographically. </li>
<li>moving edge closer to hosts improves crawl experience. </li>
<li>servers, cache, storage, queues and others would benefit from this</li>
</ul>
<h3 id="short-timeout">Short timeout</h3>
<ul>
<li>some servers respond slowly or not at all.</li>
<li>we want to fail fast and move on.</li>
</ul>
<h3 id="robustness">Robustness</h3>
<ul>
<li>say: we can talk about making the system robust</li>
<li>Consistent hashing helps distribute data across downloader workers.</li>
<li><p>we could then add/remove workers as needed.</p>
</li>
<li><p>We could save state of a crawl and data to mitigate failures.</p>
</li>
<li>could store this on db and restart by loading state + data.</li>
<li>Can&#39;t really avoid errors. Should handle them gracefully.</li>
<li><p>without crashing system.</p>
</li>
<li><p>again, validating data helps prevent issues.</p>
</li>
</ul>
<h3 id="extensibility">Extensibility</h3>
<ul>
<li>we could support parsing other files later.</li>
<li>could plugin something like Image downloader right after duplicate service.</li>
<li>any other module could park there like Copyright checker, etc.</li>
</ul>
<h3 id="problematic-content">Problematic content</h3>
<ul>
<li>hashing or checksum to prevent dups.</li>
<li>Noise: Ads, spam urls, etc are not userful and should be excluded.</li>
</ul>
<h2 id="wrap-up">Wrap up</h2>
<ul>
<li>retrieving dynamically generated links can be done with server-side rendering b4 parsing.</li>
</ul>
<h1 id="autocomplete">Autocomplete</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<p>(can also be Top K search)</p>
<h3 id="ask">Ask</h3>
<ul>
<li>are we matching prefix only? middle? (beginning)</li>
<li>how many suggestions to return? (5)</li>
<li>how do we know which 5 to return? (popularity, historical freq)</li>
<li>do we have to support spell check? (no)</li>
<li>are searches in english? (yes)</li>
<li>what about capitalization or specials? (no, all lowercase)</li>
<li>what scale are we supporting? (10m DAU)</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>Fast response: suggestions must be surfaced quickly to prevent stuttering</li>
<li>must be relevant to the query entered</li>
<li>must be stack ranked by popularity or whatever we&#39;re looking for</li>
<li>must handle high volume of traffic.</li>
<li>highly available: even when part of system is offline, slow, or network errors</li>
</ul>
<h3 id="estimation">Estimation</h3>
<ul>
<li>10m DAU</li>
<li>each user searches 10 things daily</li>
<li>each query is about 4 words long<ul>
<li>each word has about 5 characters (ASCII)</li>
<li>if a char is a byte, 20 bytes per query</li>
</ul>
</li>
<li>after each char in input, client sends requests to backend for suggestions.<ul>
<li>each query sends average 20 requests to the backend..</li>
</ul>
</li>
<li>10m <em> 10 queries / day </em> 20 chars / 24hrs / 3600 seconds = ~24k qps</li>
<li>peak QPS: QPS * 2 = ~48k</li>
<li>if 20% of search queries are new, 10m <em> 10 queries / day </em> 20 byte</li>
<li>per query * 20% = .4gb of new data added to storage every day.</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<ul>
<li>thinking high level, we&#39;d need to gather data and aggregate that.<ul>
<li>probably done in real-time but at this scale, concerned</li>
</ul>
</li>
<li>we&#39;d also need the searching service that returns the top results.</li>
</ul>
<h3 id="data-gathering-service">Data gathering service</h3>
<ul>
<li>I&#39;m thinking about a frequency table query:frequency</li>
<li>write: table below<ul>
<li>facebook:40</li>
<li>faculty:2</li>
<li>famous rapper:10</li>
<li>facelift: 5</li>
<li>fallon: 4</li>
<li>fans for sale: 1</li>
</ul>
</li>
</ul>
<h3 id="query-service">Query service</h3>
<ul>
<li>typing &quot;fa&quot; returns<ul>
<li>facebook</li>
<li>famous rapper</li>
<li>faculty</li>
<li>facelift</li>
<li>fallon</li>
</ul>
</li>
<li>ask: do we want to dig into what this query might look like?<ul>
<li>SELECT * FROM search_frequency_table</li>
<li>WHERE query Like <code>prefix%</code></li>
<li>ORDER BY frequency DESC</li>
<li>LIMIT 5</li>
</ul>
</li>
<li>this works when data is small but when large, querying becomes bottleneck</li>
</ul>
<h2 id="dive">Dive</h2>
<ul>
<li>Going a bit deeper, a trie would be optimal DS here.</li>
</ul>
<h3 id="trie">Trie</h3>
<ul>
<li>We would want to steer away from relational dbs since they&#39;ll be a bottleneck. </li>
<li>a prefix tree would help here. This will be a big part of the system.</li>
<li>the &quot;try&quot; can store compact strings</li>
<li>its essentially just a tree structure</li>
<li>where the root represents an empty string</li>
<li>and each node stores a character with 26 children (one per char).</li>
<li><p>each tree node represents a single word or prefix string.</p>
</li>
<li><p>to support frequency, we could maybe include that in the nodes.</p>
</li>
<li>usually nodes with a char that ends a word uses a boolean flag</li>
<li><p>like <code>endWord</code> to represent that. Can store frequency there.</p>
</li>
<li><p>to get the top k most searched terms we&#39;d have to</p>
<ul>
<li>find prefix, O(p), where <code>p</code> is prefix length</li>
<li>traverse subtree from prefix node to get all valid children<ul>
<li>these are nodes with <code>endWord</code> set to true.</li>
<li>that&#39;s O(c), where <code>c</code> is # of children of that node</li>
</ul>
</li>
<li>sort children to get top k for O(clogc)</li>
</ul>
</li>
<li>so looking for &quot;fa&quot; here, we&#39;d<ul>
<li>find the prefix node &quot;fa&quot;</li>
<li>traverse the subtree and get valid children (all from my set)</li>
<li>sort and return top 5.</li>
</ul>
</li>
<li><p>ask: would you like me to draw the &quot;try&quot;? </p>
<ul>
<li>blank root -&gt; f -&gt; fa -&gt; fac ...</li>
</ul>
</li>
<li><p>we can optimize a bit. we&#39;re currently traversing the complete &quot;try&quot; </p>
</li>
<li>to get top k results in worst case. </li>
<li>we could cache the top queries at each node</li>
<li>or limit the max length of a prefix.</li>
</ul>
<h3 id="limit-max-length-of-prefix">Limit max length of prefix</h3>
<ul>
<li>we agreed on average, we&#39;d have about 20 chars in a query.</li>
<li>so <code>p</code> here would be a relatively small constant we can double</li>
<li>for safety and say 40 at max.</li>
<li>limiting the prefix size moves the prefix search bound from </li>
<li><p>O(p) to O(1).</p>
</li>
<li><p>we still have the full &quot;try&quot; traversal issue and we talked about caching</p>
</li>
<li>we could store top k most frequented queries at each node. </li>
<li>since we limit the suggestions to 5, k is small.</li>
<li>this will help us significantly reduce time complexity, retrieve top 5.</li>
<li>at the expense of the additional space to store at every node.<ul>
<li>since fast response is a FR, this tradeoff makes sense to me.</li>
<li>ask: would you agree?</li>
<li>if you drew tri:<ul>
<li>add array of words beneath each node at each node.</li>
</ul>
</li>
</ul>
</li>
<li>after these tweaks, we&#39;ll land at O(1) to get top k queries.<ul>
<li>finding prefix node is O(1)</li>
<li>returning top k has results sorted and cached for O(1)</li>
</ul>
</li>
</ul>
<h3 id="data-gathering">Data gathering</h3>
<ul>
<li>say: I know I said realtime earlier, but going through the design </li>
<li>so far, I don&#39;t think it would be reasonable at this scale. <ul>
<li>we might be handling billions of queries per day.</li>
<li>keeping that &quot;try&quot; updated will bring this to a crawl.</li>
<li>those top suggestions might not change much after building the &quot;try&quot;</li>
<li>and might be wasteful to update it frequently.</li>
</ul>
</li>
<li>say: when I think autocomplete, i think about Google search.<ul>
<li>it doesn&#39;t update much daily for a given location</li>
<li>it&#39;s kind of like &#39;trending&#39; keywords.</li>
<li>which makes me think of realtime processing pipelines I&#39;ve used</li>
<li>for collecting analytics and such. </li>
<li>but batch processing might make more sense for a google like sys.</li>
</ul>
</li>
</ul>
<h3 id="redesign-data-gathering">Redesign data gathering</h3>
<ul>
<li>thinking this data gathering flow, I can think about a few components<ul>
<li>analytics store: holds logs on queries and timestamps</li>
<li>log aggregators: process log data</li>
<li>data store to hold aggregated data</li>
<li>workers to grab that data at determined intervals and store</li>
<li>&quot;try&quot; database and cache</li>
<li>say: lots of text here. lets draw some boxes</li>
<li>draw: the thing</li>
</ul>
</li>
</ul>
<p><img src="./images/other/autocomplete1.png" alt="pic"/></p>
<ul>
<li>Query Aggregators: go through very large and raw log data to transform and aggregate data in useful format.<ul>
<li>For apps that need real-time-ish data, we can aggregate over a short intervals.</li>
<li>for other cases, we could aggregate over longer time interval like days or weekly.<ul>
<li>for our case, would a longer time interval be ok? (for building the &quot;try&quot;) (assume weekly)</li>
</ul>
</li>
</ul>
</li>
<li>Aggregated data: we could format the data so rows map to weeks.<ul>
<li>colums: query, date, count</li>
<li>where date is the first day of the week</li>
<li>and count is number of times that query was seen that week.</li>
</ul>
</li>
<li>&quot;Try&quot; workers: run async jobs at set intervals<ul>
<li>just build the &quot;try&quot; and store it in the &quot;try&quot; db</li>
</ul>
</li>
<li>&quot;Try&quot; cache: is a distributed cache to keep &quot;try&quot; in memory for fast retrival.<ul>
<li>every week, it will take a snapshot of the db.</li>
</ul>
</li>
<li>&quot;Try&quot; db: stores &quot;trys&quot;<ul>
<li>For this, could serialize the weekly snapshot and store in document store like MongoDB since it&#39;s great for serialized data.</li>
<li>but I think a better way would be to store it in hash table form.<ul>
<li>keys would be the prefix</li>
<li>the value would be a mapping of trie nodes</li>
<li>so fa: [facebook: 35, famous: 20...]</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="query-service">Query service</h3>
<ul>
<li>say: to query this data, we can be more efficient with this design.</li>
<li>draw: so querying might look like this.<ul>
<li>query is submitted from client</li>
<li>hits load balancer and is forwarded to app server</li>
<li>app server gets &quot;try&quot; data from cache<ul>
<li>constructs autocomplete suggestions</li>
</ul>
</li>
<li>if we cache-miss, get data from db and populate cache.<ul>
<li>helps future requests be served from cache.</li>
<li>as long as the miss wasn&#39;t due to cache failure (offline, memory)</li>
</ul>
</li>
</ul>
</li>
<li>the query service needs to be super fast.</li>
<li>we could leverage the client to improve the experience<ul>
<li>use async JS to fetch autocomplete vs full page reload</li>
<li>leverage browser&#39;s caching and store autocomplete results </li>
<li>short TTL on this to keep results fresh.</li>
</ul>
</li>
<li>in such a large scale system, we can probably just sample instead of logging every request.logging 1 out of X requests would be just as good<ul>
<li>and save on storage and processing.</li>
</ul>
</li>
</ul>
<h3 id="trie-operations">Trie operations</h3>
<ul>
<li>say: i keep thinking about the &quot;try&quot;.</li>
<li>ask: would you like to dive into some of the ops like update/delete?</li>
<li>create: we talked about building the trie by workers from aggreg. data<ul>
<li>coming from the log/analytics store</li>
</ul>
</li>
<li>update: we talked about updating the trie weekly. New trie replaces old<ul>
<li>could also update trie node directly but that would be slow. </li>
<li>if it&#39;s a small trie, it could be ok. This is because the update</li>
<li>would have to propagate upwards to root. </li>
</ul>
</li>
<li>delete: Some of these queries might be innapropriate.<ul>
<li>seen too many AI bots taken down for hate/racist speech. </li>
<li>we&#39;d want to filter out content like that.</li>
<li>the filter could take a set of rules to determine what to remove</li>
<li>we could update those rules as needed.</li>
<li>could async remove data from database</li>
</ul>
</li>
</ul>
<h3 id="scaling-storage">Scaling storage</h3>
<ul>
<li>there is no way the trie doesn&#39;t grow too large to be store in 1 server</li>
<li>we could shard the data across shards for each letter. </li>
<li>we could extend this by prefix of a number of letters, aa-at.</li>
<li>but some shards will be much larger than others and data wont b even dist.</li>
<li>we&#39;d have to implement a smart sharding logic<ul>
<li>analyze historical data distribution pattern and use that to shard</li>
<li>we&#39;d need a shard manager as a lookup table to see where to store</li>
<li>adds a bit of latency since we have to ask manager for shard info</li>
<li>but helps us scale nicely.</li>
</ul>
</li>
</ul>
<h2 id="wrap-up">Wrap up</h2>
<ul>
<li>support other languages by storing unicode chars in nodes.<ul>
<li>unicode supports every character</li>
</ul>
</li>
<li>localize results by having diff tries for diff countries.<ul>
<li>could store tries in CDNs</li>
</ul>
</li>
<li>for realtime, a breaking news event wont be supported well. <ul>
<li>workers are scheduled to run weekly</li>
<li>it would take too long to build the trie even if scheduled then</li>
<li>could think of some approaches like</li>
<li>sharding to reduce data set </li>
<li>tweak the ranking algo to give recent queries more weight</li>
<li>A streaming data pipeline would be the way to go here<ul>
<li>feed queries to MQ -&gt; spark streaming cluster -&gt; hadoop</li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="youtube">Youtube</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>What features are important? (upload video, watch)</li>
<li>What clients are we supporting? (mobile, web, tv)</li>
<li>How many DAU? (5m)</li>
<li>Average streaming time daily? (30min)</li>
<li>Users distributed globally? (yes)</li>
<li>What are the supported video resolutions? (most)</li>
<li>do we have to encrypt content? (yes)</li>
<li>how large can files be? (maxis 1GB, most are small-medium)</li>
<li>safe to assume we could use existing cloud solutions in our design?</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>upload video</li>
<li>stream video smoothly</li>
<li>change video quality</li>
<li>low infra cost</li>
<li>high availability, scalability, reliability</li>
<li>web, mobile and tv support</li>
</ul>
<h3 id="estimation">Estimation</h3>
<ul>
<li>DAU: 5m</li>
<li>each user watches 5 videos per day</li>
<li>10% of users upload a video per day</li>
<li>avg video size is 300mb</li>
<li>total daily storage needed: 5m <em> 10% </em> 300mb = 150TB</li>
<li>CDN cost<ul>
<li>using a cloud CDN will result in charged for data out of the CDN</li>
<li>If all traffic was served from the US and avg cost per GB was .02</li>
<li>calculating just streaming to keep numbers reasonable</li>
<li>5m <em> 5 videos watched DAU </em> .3gb * .02 = 150k daily<ul>
<li>maybe CloudFront gives us a special rate <em>laugh</em></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<ul>
<li>at a high level, we have:<ul>
<li>clients that consume content</li>
<li>CDN to hold/distribute content globally</li>
<li>App servers which handle metadata, recommendations, urls, etc.</li>
</ul>
</li>
</ul>
<h3 id="video-upload-flow">Video upload flow</h3>
<ul>
<li>for video upload, it could look something like this:</li>
</ul>
<p><img src="./images/other/youtube1.png" alt="pic"/></p>
<ul>
<li>app servers handle all non-streaming requests.</li>
<li>metadata db: sharded and replicated to meet requirements (perf, HAv)<ul>
<li>video url, size, resolution, format, user info, etc</li>
</ul>
</li>
<li>metadata cache: would cache video/user metadata for faster access</li>
<li>Transcoders: encode video into formats supported to support diff bandw.<ul>
<li>we have to support diff. standards like MPEG/DASH/HLS for diff devices.</li>
</ul>
</li>
<li>Transcoded store: stores all diff encodings.</li>
<li>CDNs are populated after transcoding is done.<ul>
<li>Could populate certain CDNs or all based on popularity expectation</li>
<li>CDNs could be peers where each gets a chunk and share the rest.</li>
</ul>
</li>
<li>MQ: stores messages announcing movies are ready.</li>
<li><p>handlers: listen to those events and update the metadata entries</p>
</li>
<li><p>say: so if i&#39;m uploading, I:</p>
<ul>
<li>upload video to raw blob store</li>
<li>transcode servers pull video and encode</li>
<li>once done, we do some work in parallel here<ul>
<li>transcoded vids are sent to transcode store</li>
<li>completion event is enqueued</li>
</ul>
</li>
<li>transcoded vids are distributed to CDNs</li>
<li>workers consume completion events from MQ<ul>
<li>update data in metadata cache/db</li>
</ul>
</li>
<li>notify client of success and make available for streaming</li>
</ul>
</li>
</ul>
<h3 id="video-streaming-flow">Video streaming flow</h3>
<ul>
<li>we&#39;ll stream the video as downloading and then playing would not be good. </li>
<li>videos are streamed from CDNs closest to user (reduce latency)</li>
</ul>
<h2 id="dive">Dive</h2>
<ul>
<li>say: maybe we can dive a bit deeper into these flows now</li>
</ul>
<h3 id="video-transcoding">Video transcoding</h3>
<ul>
<li>The source video will have a set format/bitrate/etc.</li>
<li>to play nicely in other devices, it needs to be transcoded</li>
<li><p>higher bitrate streams = more processing power + fast internet req.</p>
</li>
<li><p>serving everyone the raw source would be wasteful and bad exp.</p>
<ul>
<li>uses lots of storage too</li>
<li>some devices only support certain formats too</li>
<li>smooth playback, one of our FR, would be impossible to achieve</li>
<li>network conditions will change. we would benefit from switch stream</li>
</ul>
</li>
</ul>
<h3 id="dag-model">DAG model</h3>
<ul>
<li>We need a lot of compute to transcode a video.</li>
<li>there are many different optional or different steps we might need on a per video basis.</li>
<li>Source quality, thumbnails, watermarks/filters/stickers</li>
<li>we want to support different pipelines and ability to do paralell work.</li>
<li>let clients have some control over what work to perform</li>
<li>we could do work in stages where some can be done in sequence or parallel.</li>
<li><p>thinking for this as a DAG of processing steps.</p>
</li>
<li><p>not an expert on video but I understand: </p>
<ul>
<li>a video is audio, video, metadata in container (extension)</li>
</ul>
</li>
<li>take input video and split into those three (audio, video, metadata).<ul>
<li>audio can then be encoded</li>
<li>video could have multiple functions applied to it<ul>
<li>apply overlays</li>
<li>generate thumbnails if not provided</li>
<li>transcoded</li>
<li>inspected to make sure its good quality and not broken</li>
<li>ML models handle tagging, flag content, copyright</li>
<li>etc...</li>
</ul>
</li>
<li>then finally stitched together into a resulting version of the file.</li>
</ul>
</li>
</ul>
<h3 id="transcoding-architecture-zoom-into-transcoders-">Transcoding architecture (zoom into transcoders)</h3>
<ul>
<li>ask: would you like to explore the architeture we&#39;ll use for transcoding?<ul>
<li>we&#39;ll need a few components here.</li>
<li>draw: the purple things step by step.
<img src="./images/other/youtube2.png" alt="pic"/></li>
<li>Transcoder entry point: Gets video ready for process<ul>
<li>could split the video into segments</li>
<li>generate the task graph (DAG) based on steps needed to process</li>
<li>cache video segments. could help retry if encoding fails.</li>
<li>pass to a scheduling service</li>
</ul>
</li>
<li>Scheduler: Splits DAG into pieces of work and enqueues tasks for them<ul>
<li>passes on to a manager</li>
</ul>
</li>
<li>Manager: ensures efficient use of resources<ul>
<li>manager has a few queues to hold tasks and manages their execution</li>
<li>task queue: prioritized and contains tasks to execute</li>
<li>handler queue: another priority queue of worker use info</li>
<li>running queue: queue of workers and tasks currently running.</li>
<li>Task manager: pairs optimal worker/task for execution.</li>
<li>so task manager gets highest priority task, assigns optimal</li>
<li>worker to execute and inserts pairing info into running queue.</li>
<li>it removes it when the task is completed.</li>
</ul>
</li>
<li>Task workers: just run tasks as assigned</li>
<li>Object store: we&#39;ll rely on multiple storage types.<ul>
<li>based on type, size, access patterns, lifespan.</li>
<li>for ex, metadata might be accessed frequently by workers </li>
<li>and its small. caching would work well here.</li>
<li>anything audio/video related would be too large and should be object storage.</li>
<li>once video is done encoding, we can clear up the object store.</li>
</ul>
</li>
<li>Output video: is the result of the work done and would be stored </li>
</ul>
</li>
</ul>
<h3 id="system-optimizations">System optimizations</h3>
<ul>
<li>client should chunk the video to allow for upload resuming</li>
<li>move edge closer to users for faster uploads.</li>
<li>could use CDNs as upload centers.</li>
</ul>
<h3 id="speed-optimizations">Speed optimizations</h3>
<ul>
<li>getting low latency needs a lot of work.<ul>
<li>having a loosely coupled system utilizing parallelism will help here.</li>
</ul>
</li>
<li>there are a few places where we&#39;ve introduced some dependencies<ul>
<li>like when moving content into CDN. <ul>
<li>we fetch raw segmented video</li>
<li>then encode, then upload to encoded store</li>
<li>then propagate to CDNs.</li>
</ul>
</li>
</ul>
</li>
<li>Could use an MQ to decouple this<ul>
<li>place MQs between each step</li>
</ul>
</li>
</ul>
<h3 id="safety-optimization">safety optimization</h3>
<ul>
<li>we want to prevent unauthorized uploads by using presigned upload urls</li>
<li>client fetches pre-signed URL from app server, which has permissions</li>
<li><p>to the file pointed to by the url. </p>
</li>
<li><p>say: talking about uploads, we could allow protection of content</p>
<ul>
<li>using a DRM system to copyright content</li>
<li>AES encryption: encrypt video and set access policy.<ul>
<li>decrypts on playback, only authed users can play</li>
</ul>
</li>
<li>overlay/watermark</li>
</ul>
</li>
</ul>
<h3 id="cost-saving-optimization">cost saving optimization</h3>
<ul>
<li>Access pattern for videos is probably hot videos turn cold after some time</li>
<li>some videos might not be viewed at all</li>
<li>only store popular content in CDNs. rest from our internal solution.</li>
<li>less popular content can be encoded in less formats. </li>
<li>some videos are only popular in certain countries. Only cache there.</li>
<li>Netflix partners with ISPs to provide their own CDN solutions. </li>
<li>it&#39;s important to look at historical viewing patterns before adopting any of these.</li>
</ul>
<h3 id="error-handling">error handling</h3>
<ul>
<li>there&#39;s no way we avoid errors at this scale.</li>
<li>for this to be truly fault tolerant, we have to handle and recover quickly</li>
<li>Some errors like transcoding errors could be handled by retries.<ul>
<li>set a reasonable retry number and backoff.</li>
<li>once expired, we can return error code to client.</li>
</ul>
</li>
<li>others like malformed videos would need to halt all processes assoc.</li>
<li>with that video and return error code. </li>
<li>upload errors could cause retries. </li>
<li>if a client can&#39;t split videos before upload<ul>
<li>fall back to full upload and let server split.</li>
</ul>
</li>
<li>entry point: regenerate DAG</li>
<li>scheduler: reschedule task</li>
<li>manager queue down, use a replica.</li>
<li>task worker down, retry task with new worker.</li>
<li>App server down, should load balance to another<ul>
<li>statelessness makes this easy.</li>
</ul>
</li>
<li>caches: data is replicated across other nodes and if one goes down, data is read from another.</li>
<li>metadata db server down:<ul>
<li>primary is down, promote a secondary.</li>
<li>secondary is down, use another for reads and replace down one.</li>
</ul>
</li>
</ul>
<h1 id="googleDrive">GoogleDrive</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>what are the most important features? (upload/download files, file sync, notifications)</li>
<li>is this for mobile, web or both? (both)</li>
<li>What are supported file types? (all)</li>
<li>is encryption needed? (yes)</li>
<li>file size limit? (10G)</li>
<li>how many users are we supporting? (10m DAU)</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>add files (maybe drag and drop)</li>
<li>download files</li>
<li>sync files across devices (automatically)</li>
<li>see file revisions</li>
<li>share file</li>
<li>notify on edit, delete and shared with me</li>
<li><p>(not covering editing documents)</p>
</li>
<li><p>Data loss is not acceptable. System must be reliable.</p>
</li>
<li>fast sync speed for good user experience</li>
<li>smart bandwidth usage (some might be on mobile)</li>
<li>Should be scalable and highly available.<ul>
<li>should still be available if some servers are down.</li>
</ul>
</li>
</ul>
<h3 id="estimation">estimation</h3>
<p>50 million signed up, 10m DAU
10gb free storage
avg user uploads 2 files per day.
avg file size is 500kb
1:1 read/write ratio
Total space allocated: 50m <em> 10GB = 500PB
QPS for upload API: 10m </em> 2 uploads / 24 hours / 3600 seconds = ~240
Peak QPS = QPS * 2 = 480</p>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<ul>
<li><p>at a high level, we&#39;ll need a database</p>
<ul>
<li>keep track of metadata like user info, login, file data,etc</li>
<li>an object store to store files</li>
<li>a server to handle upload/download.</li>
</ul>
</li>
<li><p>We&#39;ll need a few APIs to support this</p>
<ul>
<li>upload, download, get revisions.</li>
</ul>
</li>
<li><p>upload could be handled in two ways.</p>
<ul>
<li>smalls files can be uploaded in one go</li>
<li>larger files/bad connection can support resumable upload</li>
<li>upload tyle could be a param passed with the request.<ul>
<li>POST /api/v1/files/upload
  params: data, uploadType=resumable</li>
<li>for resumable, could retrieve a resumable url from server</li>
<li>upload the data and monitor upload state</li>
<li>if interrupted, resume upload.</li>
</ul>
</li>
</ul>
</li>
<li><p>downloading could look like</p>
<ul>
<li>GET /api/v1/files/download<ul>
<li>params: path: &#39;/resume/poopAids_copy.bd&#39;</li>
</ul>
</li>
</ul>
</li>
<li><p>getting revisions could be similar</p>
<ul>
<li>GET /api/v1/files/revisions<ul>
<li>params:<ul>
<li>path: &#39;/resume/poopAids_copy.bd&#39;,</li>
<li>limit: 10</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>all requests are authenticated over HTTPS.</p>
</li>
</ul>
<h3 id="scale-a-bit">Scale a bit</h3>
<ul>
<li>storage will get scarce quickly. We could shard on userID</li>
<li>and use consistent hashing to distribute the data evenly</li>
<li>spinning up additional virtual nodes to handle hot shards.</li>
<li><p>at this scale, we&#39;d be better served using an established cloud service S3</p>
<ul>
<li>supports geo distribution, replication.</li>
<li>files stored in different regions help against data loss and </li>
<li>ensure availability.</li>
</ul>
</li>
<li><p>we&#39;d want to load balance traffic before hitting our API servers.</p>
</li>
<li>say: let&#39;s get some boxes down.</li>
<li>draw: boxes.</li>
</ul>
<p><img src="./images/other/drive1.png" alt="pic"/></p>
<h3 id="sync-conflicts">Sync conflicts</h3>
<ul>
<li>since we might be uploading to editing files from different accounts/users</li>
<li>merge conflicts will happen. First to commit would be the one to take.</li>
<li>next one will get a conflict and not sync.</li>
<li>that user can get a file diff and choose betwee local/server copy.<ul>
<li>can choose to merge files or override.</li>
</ul>
</li>
</ul>
<h3 id="hld">HLD</h3>
<ul>
<li>when storing files in the cloud, we usually break files into block</li>
<li>these are independently stored and addressable.</li>
<li>on read, those blocks are assembled and you get the full file. <ul>
<li>(block size dropbox uses is 4mb max)</li>
<li>we&#39;ll use block servers to get those blocks to storage</li>
<li>draw: purple block servers, s3</li>
<li>most files might not be used often and could be stored in a long term</li>
<li>draw: purple cold storage</li>
</ul>
</li>
<li>so the app servers handler everything othern than uploads.<ul>
<li>authentication, user info, metadata, etc.</li>
</ul>
</li>
<li>metadata db: stores user info, file metadata, blocks metadata, revisions, etc</li>
<li>medatada cache: helps with fast retrieval for hot files. </li>
<li>say: we&#39;ll need to propagate changes so we&#39;ll use a notification service<ul>
<li>we&#39;ll produce events for changes and can be consumed using pub/sub model. </li>
<li>we&#39;ll notify the right people when files are added/removed/edited</li>
<li>they can then pull changes as needed.</li>
<li>draw: purple notification box</li>
<li>and if someone isn&#39;t online, we can enqueue changes to be applied when they come back online</li>
<li>draw: purple queue.</li>
</ul>
</li>
</ul>
<p><img src="./images/other/drive2.png" alt="pic"/></p>
<h2 id="dive">Dive</h2>
<h3 id="block-servers">Block servers</h3>
<ul>
<li>flinging around the full file could be bandwidth prohibitive.<ul>
<li>making an update someone else needs to sync, full file would be too much.</li>
<li>blocks help here because we&#39;d be changing individual chunks.</li>
<li>those would be the ones needed to be sent across network.</li>
<li>we could also compress the blocks depending on file type.</li>
</ul>
</li>
<li>block servers process uploaded files<ul>
<li>break them into blocks</li>
<li>compressing those blocks</li>
<li>and finally encrypting them.</li>
<li>we only transfer blocks that are modified in the system.</li>
<li>this results in lower network traffic. </li>
</ul>
</li>
</ul>
<h3 id="high-consistency-requirement">High consistency requirement</h3>
<ul>
<li>should always show the same state for a file across devices/users. </li>
<li>we need strong consistency across metadata cache and database layers.</li>
<li>memory caches are eventually consistant out of the box.</li>
<li><p>to get to strong consistency, we&#39;ll need to make sure:</p>
<ul>
<li>data in cache replicas and master is consistent.</li>
<li>and invalidate caches on db write to ensure they share the same values.</li>
</ul>
</li>
<li><p>a relational database would take care of this because it&#39;s ACID compliant.</p>
</li>
<li>since that&#39;s not supported by NoSQL, we&#39;d have to do this in app code /w synch logic.</li>
<li>we&#39;ll go with relational databases due to this.</li>
</ul>
<h3 id="metadata-db">Metadata db</h3>
<ul>
<li>ask: would you like me to dive into what this data model might look like?<ul>
<li>ask: maybe just go over tables and some important fields?
<img src="./images/other/drive3.png" alt="pic"/></li>
<li>User: username, email, etc</li>
<li>Device: stores device info. push_id used for sending notif. User can have many devices.</li>
<li>Namespace: root dir for user.</li>
<li>File: stores data about latest version of file</li>
<li>file_version: read only rows with file history</li>
<li>Block: stores anything related to a block. Joinig all blocks in the right order creates full file.</li>
</ul>
</li>
</ul>
<h3 id="upload-flow">Upload flow</h3>
<ul>
<li>lets think about what this upload flow might look like:<ul>
<li>client makes parallel request with file metadata and file to be uploaded.</li>
<li>for the metadata:<ul>
<li>it is stored in the metadata db with upload_status: &#39;pending&#39;.</li>
<li>produce event to let the notification service know a new file is being added.</li>
<li>notification service notifies clients that need to know.</li>
</ul>
</li>
<li>for the file:<ul>
<li>file content is uploaded to block server.</li>
<li>block server chunks file into blocks, compresses, encrypts and uploads to s3</li>
<li>on upload complete, callback is called and passed to app servers.</li>
<li>metadata entry is changed to &quot;uploaded&quot;</li>
<li>produce event for notification service who notifies clients</li>
</ul>
</li>
</ul>
</li>
<li>editing will be similar.</li>
</ul>
<h3 id="download-flow">Download flow</h3>
<ul>
<li><p>triggered when new file is added/updated elsewhere. notification sent.</p>
<ul>
<li>if client online, notif. informs so we pull latest data.</li>
<li>if client is offline, data is cached.</li>
<li>When offline client comes back, it pulls changes from cache. </li>
</ul>
</li>
<li><p>When client knows a file is changed, can requset metadata via API</p>
</li>
<li><p>then downloads blocks to construct file. </p>
</li>
<li><p>again, client informed by notification service.</p>
</li>
<li>client fetches metadata</li>
<li>app servers get that data of changes and returns to app server</li>
<li>client gets metadata and sends request to block servers to fetch blocks.</li>
<li>block servers fetch from s3.</li>
<li>client fetches all new blocks to rebuild file. </li>
</ul>
<h3 id="notification-service">Notification service</h3>
<ul>
<li>to keep conflicts to a min, all changes need to raise events to notification service.</li>
<li>to keep clients informed, could use long polling</li>
<li>or could use WebSocket.</li>
<li>comms with server isn&#39;t bi-directional so long polling works fine.</li>
<li>clients establish long poll connection with notification service.</li>
<li>if changes are detected, client closes the connection.</li>
<li>this triggers client to get latest from metadata server.</li>
<li>when response is received or timedout, a new connection is opened.</li>
</ul>
<h3 id="save-storage-space">Save storage space</h3>
<ul>
<li>supporting multiple versions and keep high reliability, we store many copies of files across DCs.</li>
<li>To reduce storage, we could<ul>
<li>de-dup blocks. Eliminating redundant blocks for each account is straight forward.</li>
<li>use a smart backup approach. <ul>
<li>could set version limit count. hitting this limit results in oldest one being replaced by new.</li>
<li>keep most important versions only. These are the ones with highest weights (recent versions).<ul>
<li>should experiment to find right # of versions to keep.</li>
</ul>
</li>
</ul>
</li>
<li>move infrequent data to cold storage which we did.</li>
</ul>
</li>
</ul>
<h3 id="failure-handling">Failure handling</h3>
<ul>
<li>if a load balancer fails, it would stop heartbeating with passive LB. It would then take its IP and work.</li>
<li>block server failure: other server can pick up where the job was left off.</li>
<li>cloud storage: since s3 stores in diff. regions, can fetch from those.</li>
</ul>
<h3 id="detailed-design">Detailed design</h3>
<p><img src="./images/other/pic.png" alt="pic"/></p>
<ol>
<li>thing</li>
</ol>
<h1 id="yelp">Yelp</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>What are some important features to include? (search, nearby)</li>
<li>when searching, is there a radius limit specified?</li>
<li>do users usually remain within the same city/county?</li>
<li>mobile, web or both?</li>
<li>How are POIs added to system?</li>
<li>is this a global system?</li>
<li>Reviews? what is a review composed of? pic, text, rating</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>add/updated/delete places</li>
<li>given location (lat, long), find nearby places</li>
<li><p>review</p>
</li>
<li><p>realtime search with min latency</p>
</li>
<li>read heavy, most reqs are searches with few writes to add places</li>
</ul>
<h3 id="estimation">Estimation</h3>
<ul>
<li>do we have a # of places in mind? would 250m be a good estimation?</li>
<li>maybe processing about 50k QPS on average and twice that on peak?</li>
<li>Do we have an expected YoY growth? we could assume a 20-30% growth?<ul>
<li>as far as new places and users is concerned.</li>
</ul>
</li>
</ul>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<h3 id="database">Database</h3>
<ul>
<li>ask: what might these places look like?</li>
<li><p>we&#39;ll need a Location table to store these with fields like</p>
<ul>
<li>location_id, PK</li>
<li>latitude</li>
<li>longtitude</li>
<li>category</li>
<li>name</li>
<li>description</li>
</ul>
</li>
<li><p>reviews can be another table like</p>
<ul>
<li>review_id</li>
<li>location_id</li>
<li>user_id</li>
<li>content</li>
<li>rating</li>
</ul>
</li>
<li><p>would need a user table with fields to describe user</p>
<ul>
<li>like email, name, hashed password, etc</li>
<li>ask: would you like me to explore this table more?</li>
</ul>
</li>
</ul>
<h3 id="api">API</h3>
<ul>
<li>we&#39;d need a few APIs to support search, reviews, location, etc</li>
<li>for search():<ul>
<li>query</li>
<li>business_type: bad cuts, is it a barbershop or an urgent care?</li>
<li>sort_key: nearest, best match, highest rated</li>
<li>limit, page_num, lat, long</li>
</ul>
</li>
</ul>
<h3 id="hld">HLD</h3>
<h4 id="sql">SQL</h4>
<ul>
<li>All of these places, users, pictures and reviews need to be stored</li>
<li>indexed so we can give users a great experience.</li>
<li><p>we should aim for efficient reads on searches to give users realtime exp.</p>
</li>
<li><p>unless we&#39;re tracking down foodtrucks, places won&#39;t change locations.</p>
</li>
<li>This is all very relational data and we could use a mysql cluster</li>
<li>where we write to a primary and that&#39;s replicated over to replicas.</li>
<li>since writing is not as common as reading, this ensures good throughput.</li>
<li>we can index on lat, long fields since we&#39;ll use that often.</li>
<li><p>a query to find nearby locations to a point (a,b) could use pythagorean</p>
<ul>
<li>TRY TO STAY AWAY FROM THIS</li>
<li>SELECT * from Places </li>
<li>WHERE Latitude between A-RADIUS and A+RADIUS </li>
<li>AND Longitude between B-RADIUS and B+RADIUS </li>
</ul>
</li>
<li><p>of course, having 250m POIs with two indexes which can return huge lists</p>
</li>
<li>which we&#39;d have to get an intersection will be inefficient. </li>
<li>this could be a bit better if we could shrink those lists.<ul>
<li>nobody is driving 4k miles across the ocean for starbucks</li>
</ul>
</li>
</ul>
<h4 id="grids">Grids</h4>
<ul>
<li>thinking about driving, we could represent our data in grids.</li>
<li>we could then group places by their assigned grids.</li>
<li>grids are of a defined size and their lat-long borders contain places</li>
<li>Given a lat, long, we can know what grid it belongs to</li>
<li>and with that, what places are in there.</li>
<li><p>given a grid, we can also query neighboring grids as needed.</p>
</li>
<li><p>a good way to determine the right grid size</p>
</li>
<li>would be to bind it to the distance we want to query.</li>
<li><p>fixed grids will make it easy to find neighboring 8 grids to search on.</p>
</li>
<li><p>we could augment each location entry with its grid_id</p>
</li>
<li>and index on that too, to speed up searching.</li>
<li>SQL: <ul>
<li>SELECT * from Places </li>
<li>WHERE Latitude between A-RAD and A+RAD </li>
<li>and Longitude between B-RAD and B+RAD </li>
<li>and GridID in (NEIGHBORING GRID IDS...)</li>
</ul>
</li>
<li>this will be much faster as we&#39;re looking at a targeted subset.</li>
<li>instead of every place </li>
<li>we can keep the index in a gridID:[places in grid] map in memory.</li>
<li><p>using a redis cluster. Probably only take a few GB since entries small.</p>
</li>
<li><p>we&#39;ll run into some grids that have more places and others.</p>
</li>
<li>where the grid will be more dense than sparse.</li>
<li>we could set a configurable place count that upon being exceeded</li>
<li>dynamically adjusts the grid into smaller grids.</li>
</ul>
<h4 id="dynamic-size-grids">Dynamic size grids</h4>
<ul>
<li>When we split the grids, we can do it evenly into 4 subgrids.</li>
<li>subgrids can be nodes in a tree and represent a grid</li>
<li>grid contains places within that grid.</li>
<li><p>if those hit our limit, we can further break it down</p>
</li>
<li><p>so really, this recursive approach would cover us all the way up.</p>
</li>
<li><p>at any time, any 4 neighboring grid squares which add up to below our threshold could be combined into 1 grid square.</p>
</li>
<li><p>given a location, we can find it&#39;s grid by traversing from the root down to a leaf. </p>
</li>
<li><p>we can store parent pointers for each node to easily traverse up and access neighbors.</p>
</li>
<li><p>we can get the location_ids and then run search on db to get deets.</p>
</li>
<li><p>for search flow, we&#39;d need to find the user&#39;s location</p>
<ul>
<li>if that grid square satisfies the search reqs, return them.</li>
<li>if not, move to neighboring nodes through parent pointer</li>
<li>till we get enough results.<ul>
<li>keeping in mind not to exceed radius</li>
</ul>
</li>
</ul>
</li>
<li><p>again, a few GBs would be enough to store the trees.</p>
<ul>
<li>since we only cache location_id and location info.</li>
</ul>
</li>
<li><p>adding a new place would need to have the metadata db and tree populated.</p>
</li>
<li>since our tree can easily fit in one machine, updating it should be easy.<ul>
<li>if it&#39;s distributed across multiple, it&#39;s a bit more complex.</li>
<li>would have to find the right server responsible for that grid.</li>
</ul>
</li>
</ul>
<h4 id="data-partitioning">Data partitioning</h4>
<ul>
<li>Eventually, the number of places will exceed the capacity of our server<ul>
<li>big assumption that hardware doesn&#39;t outpace growth here.</li>
</ul>
</li>
<li>or one server can&#39;t handle read traffic.</li>
<li><p>We&#39;d have to distribute our index across multiple machines.</p>
</li>
<li><p>we could shard on zipcodes and use consistent hashing.</p>
</li>
<li>All places places in a zipcode/s in same node.</li>
<li>we&#39;d find the server associated with that zipcode and store it there.</li>
<li><p>If a shard becomes hot, we could spin up more virtual nodes and move data.</p>
</li>
<li><p>could also shard on location_id. Hashing the location_id tells server.</p>
</li>
<li>finding nearby places requires querying all servers and aggregating res.</li>
</ul>
<h4 id="replication-fault-tolerance">Replication &amp; fault tolerance</h4>
<ul>
<li>Replicating the trees would help us distribute read traffic. </li>
<li>writes got to a primary and reads to any replica.</li>
<li>this eventual consistency is fine for this system.</li>
<li>Primary going down results in a secondary being promoted.</li>
<li><p>if primary and secondaries all fail, we&#39;d need to rebuild that tree.</p>
<ul>
<li>we&#39;ll have to deal with lack of availability for that grid.</li>
</ul>
</li>
<li><p>We&#39;ll need a reverse index to map places to the right server storing its tree. </p>
</li>
<li>Another index server can store that where the mapping is<ul>
<li>tree_server_id: set of places on that server. (for quick add/remove)</li>
<li>we&#39;ll need locationID and lat/long with each place so servers</li>
<li>can rebuild themselves. fetching data from index will be faster.</li>
<li>index should also have a replica for fault tolerance.</li>
<li>last case, can always rebuild from db.</li>
</ul>
</li>
<li>a HLD might look like:<ul>
<li>draw: client -&gt; API gateway -&gt; aggregator svc -&gt; tree svc</li>
<li>-&gt; tree index -&gt; cache -&gt; db.</li>
</ul>
</li>
</ul>
<h4 id="lb">LB</h4>
<ul>
<li>based on server traffic via heartbeat</li>
</ul>
<h4 id="ranking">Ranking</h4>
<ul>
<li>can average ratings and give a score to each place. store in db and tree.</li>
<li>use that to return results.</li>
<li>use job to recalculate every once in a while as realtime would be bad.</li>
</ul>
<h1 id="liveCommenting">LiveCommenting</h1>
<p><a href="#TOC">Up</a></p>
<h2 id="understand-the-problem">Understand the problem</h2>
<h3 id="ask">Ask</h3>
<ul>
<li>are these comments on a live video? (no, on posts)</li>
<li>are these available on posts for certain people? (all)</li>
<li>Is this just for recent posts? (all)</li>
<li>real time? (yes)</li>
<li>is this only for posts I&#39;ve clicked on while I&#39;m currently on it? (yes)</li>
<li>so when I move away, I don&#39;t get any more comments?</li>
<li>mobile, web or both? (both)</li>
<li>are the comments appended live or does the user have to perform an action to pull them? (live)</li>
<li><p>can a user have more than 1 post open and getting live comments? (must be active)</p>
</li>
<li><p>What scale are we supporting?</p>
</li>
<li>is there a limit to users getting live comments?</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>make comments that will be received real time by anyone viewing the post</li>
<li>get live comments from users on a visiting post</li>
</ul>
<p>Highly available
Reliable
Eventually consistent (comments won&#39;t arrive at the same time to all devices. network, etc)
Fault tolerant</p>
<h2 id="propose-hld-get-buy-in">Propose HLD, get buy in</h2>
<h3 id="components">Components</h3>
<ul>
<li>client: when visiting a post, subscribes to events for this postID<ul>
<li>HTTP long polling using SSE for getting comments</li>
<li>HTTP request when making a comment</li>
<li>draw: client</li>
</ul>
</li>
<li>Realtime service: handles persistent connection with user via SSE<ul>
<li>box with many connection handler nodes. they keep connection with user</li>
<li>connection manager binds client with a handler</li>
<li>stores connectionID and postID mapping in memory</li>
<li>draw realtime service</li>
</ul>
</li>
</ul>
<p><img src="./images/other/liveCommenting1.png" alt="pic"/></p>
<h3 id="subscribe-flow">Subscribe flow</h3>
<ul>
<li>device opens a post and sends subscription request to server.<ul>
<li>passes postID</li>
</ul>
</li>
<li>realtime service stores the postID and connectionID in memory</li>
</ul>
<h3 id="comment-flow">Comment flow</h3>
<ul>
<li>comment service passes the comment to the realtime service manager</li>
<li>manager reads the cache and passes the message on to the right handlers</li>
<li>handlers pass the comment to the clients</li>
</ul>
<h3 id="hld">HLD</h3>
<ul>
<li>As we get more traffic, we&#39;ll have a hard time keeping with as is.</li>
<li>realtime service is a bottleneck.</li>
<li>we&#39;ll have to handle many connections.</li>
<li>we have to be stateful here so we could introduce more realtime instances</li>
</ul>
<h3 id="api-gateway">API Gateway</h3>
<ul>
<li>I&#39;ll introduce an API gateway component<ul>
<li>one of the features will be to load balance to an available instance</li>
<li>draw: purple gateway</li>
</ul>
</li>
</ul>
<h3 id="realitime-service">Realitime service</h3>
<ul>
<li>now on connection request, we&#39;re load balanced into available realtime service</li>
<li>realtime service assigns connection handler and stores mapping in memory.</li>
</ul>
<h3 id="realtime-service-manager">Realtime service manager</h3>
<ul>
<li>now that we have multiple Realtime service instances, we&#39;ll need to manage them.<ul>
<li>comment service needs to know what realtime service instance to talk to</li>
<li>we&#39;ll introduce a realtime service manager to handle that.</li>
<li>RTS will registre with manager</li>
<li>draw: Purple real time service manager box.</li>
<li>draw: shift comment service under manager</li>
<li>now messages go to the RTS manager who keeps postID:RTS mapping</li>
</ul>
</li>
<li>we&#39;re now able to horizontally scale our realtime service pretty far out</li>
<li><p>if a realtime service instance goes down, it will take the connections.</p>
<ul>
<li>could lead to a thundering heard.</li>
<li>could spread client reconnect logic randomly within x second timespan</li>
</ul>
</li>
<li><p>now the realtime service manager is a bottleneck.</p>
</li>
<li>we could spin up additional machines to run more RTS managers.<ul>
<li>but we now have a bunch of connection data spread across managers.</li>
</ul>
</li>
<li>we&#39;ll remove state from the manager and move this postID:RTS mapping</li>
<li>to a redis cluster. <ul>
<li>draw: green cache</li>
<li>while we&#39;re at it, we&#39;ll decouple the comment service <ul>
<li>by introducing a MQ beween it and the managers</li>
<li>draw: green queue</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="revised-subscribe-comment-flow">Revised subscribe/comment flow</h3>
<ul>
<li>so now to revisit the subscribe flow<ul>
<li>user sends connect request and is load balanced to a RTS instance</li>
<li>RTS manager assigns connection handler and stores postID:conectionID</li>
<li>then registers with an available RTS manager instance</li>
<li>RTS manager stores the postID:RTS in external cache.</li>
<li>and that&#39;s the subscribe flow</li>
</ul>
</li>
<li>for the comment flow<ul>
<li>comment request is made from the client via HTTP POST.</li>
<li>comment service persists and then enqueues message in MQ</li>
<li>and available RTS manager consumes message</li>
<li>checks the cache to find what RTS instances need it and passes it on</li>
<li>RTS instances have manager figure out what connection handlers need</li>
<li>connection handlers deliver comments.</li>
</ul>
</li>
<li>This should comfortably handle a lot of traffic without trouble.<ul>
<li>unless we introduce DCs</li>
<li>which we probably have to, and there&#39;s our next issue.</li>
<li>and we could do this all day</li>
<li>managers are peers and could publish to other DCs for them to handle</li>
</ul>
</li>
</ul>
<p><img src="./images/other/liveCommenting2.png" alt="pic"/></p>


      
      </div>
    )
  }
}



//this worked with two hover iframes
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Socket, Event } from 'react-socket-io';

// const uri = 'http://localhost/test';
// const options = { transports: ['websocket'] };

// class App extends React.Component {
//   state = {
//     google: '',
//     coderpad: '',
//     query: '',
//     showGoogle: true,
//     showCoderpad: true
//   }

//   handleCoderpadSourceUpdate = link => {
//     this.setState({
//       coderpad: link
//     })
//   }

//   onQuery = query => {
//     console.log(query);
//   }

//   toggleCoderpad = () => {
//     this.setState({
//       showCoderpad: !this.state.showCoderpad
//     });
//   }

//   toggleGoogle = () => {
//     console.log("gogole")
//     this.setState({
//       showGoogle: !this.state.showGoogle
//     });
//   }

//   render(){
//     return (
//       <Socket uri={uri} options={options}>
//         <div className="row">
        
//         <div id="window" className="col-md-12">
//           <div>
//             <h2>Window</h2>
            
//             <iframe id="coderpad" src={this.state.coderpad} style={{border:'none', display: this.state.showCoderpad ? '' : 'none'}} height="500" width="700" ></iframe>
//             <IFrame id="google" src="https://docs.google.com/drawings/d/1ZzjZiUoBiwE4ayIhQ3kq_qFrqWuwgzALG7YlJKVolMY/edit?usp=sharing"
//               style={{border:'none',opacity:'.3',position:'absolute',left:'0', display: this.state.showGoogle ? '' : 'none'}}
//               height="800" width="1200"></IFrame>
//           </div>
          
//         </div>
//         <div id="controls" className="col-md-4">
//           <div>Coderpads</div>
//           <ul id="coderpad-links">
//             <li onClick={() => this.handleCoderpadSourceUpdate('https://replit.com/@josesanchez/markdown-preview?lite=true')}>drawing</li>
//             <button onMouseOver={this.toggleCoderpad}>Coderpad</button>
//             <button onMouseOver={this.toggleGoogle}>Google</button>
//           </ul>
//           <div id="query">
//             <Event event="newQuery" handler={this.onQuery} />
//           </div>
//         </div>
        
//       </div>
//       </Socket>

//     );
//   }
// }

// class IFrame extends React.Component {
//   state = {
//     hovered: false
//   }

//   handleHover = () => {
//     this.setState({
//       hovered: true
//     })
//   }

//   handleOffHover = () => {
//     this.setState({
//       hovered: false
//     })
//   }
//   render(){
//     return(
//       <iframe {...this.props }
//         // style={{opacity: this.state.hovered ? '.5' : '.3', border:'none',position:'absolute',left:'0'}}
//         onMouseEnter={this.handleHover}
//         onMouseLeave={this.handleOffHover}></iframe>
//     )
//   }
// }

// export default App;
