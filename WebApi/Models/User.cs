using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace WebApi.Models
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool Orderer { get; set; }
        public bool Admin { get; set; }
        public bool Bilans { get; set; }
        
        public List<Order> Orders { get; set; }
    }





    
}