DROP DATABASE IF EXISTS gift_database;

CREATE DATABASE gift_database;

\c gift_database

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
    event_description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

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
    added_by_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    reserved_by_user_id INT REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_reserved_participant FOREIGN KEY (reserved_by_user_id, event_id)
        REFERENCES event_user(user_id, event_id)
        ON DELETE SET NULL,
    CONSTRAINT fk_recipient_participant FOREIGN KEY (recipient_user_id, event_id)
        REFERENCES event_user(user_id, event_id)
        ON DELETE NO ACTION
);

CREATE INDEX idx_event_user_event_id ON event_user(event_id);