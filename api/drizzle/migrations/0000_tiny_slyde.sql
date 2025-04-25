CREATE TABLE `clients` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`dob` text NOT NULL,
	`contact` text NOT NULL,
	`medical_hist` text NOT NULL,
	`enrolled_programs` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `enrolled_programs` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`created_by` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `medics` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`specialization` text NOT NULL,
	`facility` text NOT NULL,
	`registered_at` text NOT NULL
);
