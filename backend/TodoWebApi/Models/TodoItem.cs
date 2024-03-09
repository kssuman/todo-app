﻿namespace TodoWebApi.Models
{
    public class TodoItem
    {
        public long? Id { get; set; }
        public string? Task { get; set; }
        public bool IsCompleted { get; set; }
        public DateTimeOffset? Deadline { get; set;}
    }
}
