<style>
blockquote {
  max-width: 400px;
}
</style>

# Tables

### users

-   **id**: user PK
-   **email**: e-mail and username
-   **password**: password
-   **first_name**: first name
-   **last_name**: last name
-   **created_at**: when the user was created

    > **Notes**: Used for authentication, creating associations with gifts and events. Also for displaying the name of the user throughout the app.

### events

-   **id**: event PK
-   **event_name**: name of the vent
-   **event_date**: date that event will be held
-   **owner_id**: id of the user who create the event
-   **event_description**: description of the event
-   **created_at**: when the event was created

    > **Notes**: Users can create events. The user that creates the event is the owner. Every event MUST have an owner. If a user is deleted, all of those user's events will be deleted.references the user.

### event_user (participant)

-   **user_id**: id of the user participating in the event
-   **event_id**: id of the event the user is participating in
-   **is_shopper**: boolean to indicate whether participant is a shopper
-   **is_recipient**: boolean to indicate whether participant is a recipient
-   **(user_id, event_id)**: Composite PK

    > **Notes**: An event_user or "participant" is a junction table that represents the relationship between events and users. Events can have many users and users can have many events. If either an event or user is deleted, the event_user relationship between the two will be deleted. There is a check enforced to ensure at least one is selected. The primary key is a composite key of user_id and event_id.

### gifts

-   **id**: PK
-   **gift_name**: name of the gift
-   **link**: URL of the gift
-   **recipient_user_id**: id of the user the gift is for
-   **event_id**: the id: id of the event the gift was added to
-   **added_by_user_id**: id of the user (shopper or recipient) who added the gift to the system, not the event
-   **reserved_by_user_id**: id of the user that reserved the gift
-   **created_at**: when the gift was created

    > **Notes**: A Each gift MUST be associated with a recipient hence recipient_user_id being set to NOT NULL. event_id is nullable since gifts are created independently of events in a wishlist. Then, within the event, gifts can be assigned to that event by associating the gift with an event_id. Gifts can be added by both shoppers and recipients (added_by_user_id). Shoppers and recipients will be able to add gifts on either the event page they are a participant of, or via a wishlist type page accessible via the main page of the app.

    > **CONSTRAINT fk_reserved_participant**: It's ok that reserved_by_user_id is initially set to null, FK constraints are not enforced until both values of the composite key are not null. Once they are the reference guarantees the reserved user and event_id both exist in event_user.

    > **fk_recipient_participant**: We take no action here. This is because using either CASCADE or SET NULL would have unintended consequences. If the user was deleted, it would make sense to CASCADE delete the gift. But if the event was deleted, we don't want the gift to be deleted... just simply no longer associated with the event. For SET NULL, if the event was deleted, it would nullify the recipient_user_id.. which we don't want since every gift should have a recipient at all times. Taking no action is best. And then if an event is deleted, the reference to the events(id) above will handle setting the event id on the gift to null.
