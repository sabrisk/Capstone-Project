DROP DATABASE IF EXISTS Gift_Database;

CREATE DATABASE Gift_Database;

\c Gift_Database

CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(254) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_date DATE NOT NULL,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- An event_user or "participant" is a junction table that represents the
-- relationship between events and users. Events can have many users and
-- users can have many events. If either an event or user is deleted, the
-- event_user relationship between the two will be deleted. There are
-- also fields to track whether the participant is a shopper or recipient
-- or both if both are true. There is also a check enforced to ensure
-- at least one is selected. The primary key is a composite key of user_id
-- and event_id
-- Participants --
CREATE TABLE event_user (
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    event_id INT NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    is_shopper BOOLEAN NOT NULL DEFAULT FALSE,
    is_recipient BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (user_id, event_id),
    CHECK (is_shopper OR is_recipient)
);

CREATE TABLE gifts (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_name TEXT NOT NULL,
    link TEXT NOT NULL,
    recipient_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    event_id INT REFERENCES events(id) ON DELETE SET NULL DEFAULT NULL,
    -- the added_by_user_id is the shopper or recipient that added the gift
    -- either on the event screen itself or on the recipient's wishlist
    -- screen. If that user is ever deleted, all their gifts should also
    -- be deleted regardless of whether they were suggested by a shopper
    -- or added by a recipient
    added_by_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reserved_by_user_id INT REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- It's ok that reserved_by_user_id is initially set to null,
    -- FK constraints are not enforced until both values of the composite
    -- key are not null. Once they are the reference guarantees the 
    -- reserved user and event_id both exist in event_user
    CONSTRAINT fk_reserved_participant FOREIGN KEY (reserved_by_user_id, event_id)
        REFERENCES event_user(user_id, event_id)
        ON DELETE SET NULL,
    -- We take no action here. This is because using either CASCADE or
    -- SET NULL would have unintended consequences. If the user was
    -- deleted, it would make sense to CASCADE delete the gift. But if
    -- the event was deleted, we don't want the gift to be deleted...
    -- just simply no longer associated with the event
    -- For SET NULL, if the event was deleted, it would nullify the
    -- recipient_user_id.. which we don't want since every gift should
    -- have a recipient at all times
    -- Taking no action is best. And then if an event is deleted, the
    -- reference to the events(id) above will handle setting the event
    -- id on the gift to null.

    CONSTRAINT fk_recipient_participant FOREIGN KEY (recipient_user_id, event_id)
        REFERENCES event_user(user_id, event_id)
        ON DELETE NO ACTION
);

CREATE INDEX idx_event_user_event_id ON event_user(event_id)