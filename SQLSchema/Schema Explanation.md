# Tables

### users

-   Users are created with the expected fields. They will be used for authentication as well as displaying the name of the user throughout the app.

### events

-   Users can create events. The user that creates the event is the owner which references the user. If the user that created the event is ever deleted, the event will be deleted as well.

### event_user (participant)

-   An event_user or "participant" is a junction table that represents the relationship between events and users. Events can have many users and users can have many events. If either an event or user is deleted, the event_user relationship between the two will be deleted. There are also fields to track whether the participant is a shopper or recipient or both. There is also a check enforced to ensure at least one is selected. The primary key is a composite key of user_id and event_id.

### gifts

-   Gifs have the expected fields like item_name and link. Each gift MUST be associated with a recipient hence recipient_user_id being set to NOT NULL. event_id is different since gifts are created independently of events in a wishlist. Then, within the event, gifts can be assigned to that event by associating the gift with an event_id. Gifts can be added by shoppers and recipients (added_by_user_id). reserved_by_user_id represents

-   Note: Shoppers will add gifts from within the event on the page for the recipient. Recipients will add gifts on a wish list page and will then select the gifts they want to add to the event.

-   maybe specify what each field does and then write notes explaining how the relationships work.
