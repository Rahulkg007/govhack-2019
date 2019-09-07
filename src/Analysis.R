# @title GovHack Analysis
# @author Rahul K Gupta
# @date 7-Sep-2019

# Import Libraries
require(tidyverse)

# Set directory
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# Sports and Recreational Activities

sports = read_csv("../data/SportandRec.csv")
sports = sports %>% filter(Postcode %in% c(3011, 3056))
sports$SuburbTown = factor(sports$SuburbTown, levels = c("BRUNSWICK","FOOTSCRAY"), labels = c("Brunswick","Footscray"))

sportsAggregated = sports %>% 
  group_by(SuburbTown) %>% 
  summarise(count = n())

ggplot(sports, aes(SuburbTown)) + geom_bar(fill="#2c7fb8") + 
  theme_minimal() + coord_flip() +
  xlab('')
