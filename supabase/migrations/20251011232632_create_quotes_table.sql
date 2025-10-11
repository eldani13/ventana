/*
  # Create Quotes Table for Window Quote Requests

  1. New Tables
    - `quotes`
      - `id` (uuid, primary key) - Unique identifier for each quote
      - `name` (text) - Customer full name
      - `email` (text) - Customer email address
      - `phone` (text) - Customer phone number
      - `window_type` (text) - Type of window requested (abatible, corredera, panoramica, etc.)
      - `width` (numeric) - Window width in centimeters
      - `height` (numeric) - Window height in centimeters
      - `comments` (text) - Additional customer comments
      - `created_at` (timestamptz) - Timestamp of quote request
      - `status` (text) - Quote status (pending, contacted, quoted, completed)

  2. Security
    - Enable RLS on `quotes` table
    - Add policy for anonymous users to insert quotes (public form submission)
    - Add policy for authenticated admin users to view all quotes
    
  3. Important Notes
    - Public users can only INSERT (submit quotes)
    - Only authenticated users can SELECT (view quotes)
    - Default status is 'pending'
    - All fields are required except comments, width, and height
*/

CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  window_type text NOT NULL,
  width numeric,
  height numeric,
  comments text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quotes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quotes"
  ON quotes
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update quotes"
  ON quotes
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
