using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifter.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        public string Caption { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        [Required]
        public int UserProfileId { get; set; }
      
        //this allows us to pull in the userProfile Object info. We can add the userProfile object here because the userProfileId is a property of this calss
        public UserProfile UserProfile { get; set; }
      

        public List<Comment> Comments { get; set; }
      

    }
}
