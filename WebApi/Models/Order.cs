using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace WebApi.Models
{

    public class Order
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public DateTime Date { get; set; }

        public User User { get; set; }
        public List<OrderDish> OrderDishes { get; set; }
    }
}