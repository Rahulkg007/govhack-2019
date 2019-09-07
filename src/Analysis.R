# @title GovHack Analysis
# @author Rahul K Gupta
# @date 7-Sep-2019

# Import Libraries
require(tidyverse)

# Set directory
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# ----------------------------------
# Sports and Recreational Activities
# ----------------------------------

sports = read_csv("../data/SportandRec.csv")
sports = sports %>% filter(Postcode %in% c(3011, 3056))
sports$SuburbTown = factor(sports$SuburbTown, 
                           levels = c("BRUNSWICK","FOOTSCRAY"), 
                           labels = c("Brunswick","Footscray"))

write.csv(sports, "../data/SportandRec_Subset.csv")
# plot
ggplot(sports, aes(SuburbTown)) + geom_bar(fill="#2c7fb8",width=0.6) + 
  theme_minimal() + coord_flip() +
  xlab('') + ggtitle('Sport and Recreational Facilities Count') +
  labs(subtitle="Department of Health and Human Services (data.vic.gov.au)") +
  theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
ggsave("../images/Sports.jpg")

# https://rahulkg007.carto.com/builder/52f3de88-b6c3-4feb-8d5d-ea35862e9ffa/embed


# ----------------------------------
# Sports and Recreational Activities
# ----------------------------------

ato = read.csv("../data/ATO.csv")
ato = ato %>% filter(Postcode %in% c(3011, 3056))

ato$SuburbTown = "Brunswick"
ato$SuburbTown[ato$Postcode==3011] = "Footscray"

ggplot(ato, aes(SuburbTown, Average.taxable.income.or.loss3..)) +
  geom_bar(stat='identity', fill="#2c7fb8",width=0.6) + 
  theme_minimal() + coord_flip() +
  xlab('') + ylab('Average taxable income (AUD)') + ggtitle('Average Taxable Income (ATO)') +
  labs(subtitle="Australian Taxation Office - Taxation Statistics 2016-17") +
  theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
ggsave("../images/ATO.jpg")


