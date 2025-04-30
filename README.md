# Gift Coordination App
#### (Preferred choice)

### The Problem
My family consistently has trouble coordinating gift giving around the holidays. We give each other lists for suggested gifts to make shopping easier for everyone, but since it's coordinated over e-mail, mistakes get make, gifts get bought by more than one person, the wrong item gets purchased.

### The Solution
An app that allows users to coordinate gift giving for major holidays and events.  Users can create events, invite shoppers and recipients to the app via email (maybe initially create 2 accounts to demo without sending emails), add gifts for each recipient, and mark whether gifts have been reserved or purchased. The app itself will have an API to handle the above actions (ie: creating new users, adding gifts, adding events, etc.) Possibly allow users to search for gifts via external API (usually costs money) or allow them to add an Amazon link which the app would then scrape for data. Might consider using a free fake product API for proof of concept.

Additional Features (if there's time)
- Gift recommendations via API calls to an LLM.
- Discuss and coordinate via discord group chat type functionality for each person being shopped for (websockets?)
- Request gift ideas from the recipient
- email/text notifications when gift reserved/purchased
- Reservation expiration
- Email/text link to quickly allow users to extend or cancel reservation
- Browser extension to detect item being purchased and ask if they'd like to update the item in the list of gifts

<br>

# Neighborhood Tool Sharing App

### The Problem
Everyone has tools that they're not using. Everyone has tools that they need but can't necessarily justify buying if they're not going to use them often.

### The Solution
An app where people can list tools they own and are willing to rent out to others in their area. The app would encourage hyper-local sharing of tools with the intent of building relationships between neighbors.  Think Nextdoor for tools. Each user renting tools would create an etsy-style store page to list their available tools. Renters would search within their local neighborhood and "book" the tool(s) they need. App would facilitate payments between both parties and would have a rating/review system for owners and renters to encourage friendly interaction, treating tools respectfully, and returning tools in a timely manner. App would require some kind of third party payment processing, use of an external map API, as well as the app's own internal API to facilitate interaction between front-end and back-end.

<br>

# Safe Overnight Camping
### The Problem
Many people have chosen the "van/car-life" instead of a traditional living arrangement and often have difficulty finding places they're allowed to park overnight that are safe. Many cities/businesses place restrictions on where people are allowed to park overnight.

### The Solution
An app that people can join and share spots they've found that they feel safe parking in. The app would reach out to one more more external APIs for crime statistics in the area and provide a safety rating alongside a user submitted safety ratings and reviews. The app would also provide a listing of nearby amenities like laundromats, bathrooms, showers, gas stations, convenience stores, etc. The app would have its own internal API for adding locations, creating users, adding pictures, etc. Users could  add their favorite spots so they can revisit them later. There would be recent alerts so users could be updated if they got on knock from police, or something else other people visiting the spot would need to know.
