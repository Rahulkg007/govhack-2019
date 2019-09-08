# @title GovHack Analysis
# @author Rahul K Gupta
# @date 7-Sep-2019

# Import Libraries
require(tidyverse)
library(reshape2)
library(tidyr)

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
ato = ato %>% filter(Postcode %in% c(3011, 3056, 3142))

ato$SuburbTown = "Brunswick"
ato$SuburbTown[ato$Postcode==3011] = "Footscray"
ato$SuburbTown[ato$Postcode==3142] = "Toorak"

ggplot(ato, aes(x=reorder(SuburbTown, Average.taxable.income.or.loss3..),y= Average.taxable.income.or.loss3..)) +
  geom_bar(stat='identity', fill="#2c7fb8",width=0.6) + 
  theme_minimal() + coord_flip() +
  xlab('') + ylab('Average taxable income (AUD)') + ggtitle('Average Taxable Income (ATO)') +
  labs(subtitle="Australian Taxation Office - Taxation Statistics 2016-17") +
  theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
ggsave("../images/ATO.jpg")



# ----------------------------------
# Victoria Population by Age&Sex
# ----------------------------------

Pop = read_csv("../data/Population_by_Age_Sex.csv")
Pop <- melt(Pop, id=(c("Suburb", "Sex")))

ggplot(Pop, aes(x=reorder(Suburb,value),y=value)) +
  geom_bar(stat='identity', fill="#2c7fb8",width=0.6) + 
  theme_minimal() + coord_flip()+xlab('') + ylab('Number of population') + ggtitle('Estimated population 30 June 2018') +
  labs(subtitle="Australian Bureau of Statistics 29 August 2019") +
  theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
ggsave("../images/Population1.jpg")

ggplot(Pop, aes(x=reorder(Suburb,value),y=value))+geom_bar(stat = "identity", aes(fill = variable), position = "dodge") +
  xlab("Months") + ylab("Number of population") +coord_flip()+
  ggtitle("Number of population by Age") +
  theme_minimal()
ggsave("../images/Population2.jpg")

ggplot(Pop, aes(x=reorder(Suburb,value),y=value))+geom_bar(stat = "identity", aes(fill = Sex), position = "dodge") +
  xlab("Months") + ylab("Number of population") +coord_flip()+
  ggtitle("Number of population by Age") +
  theme_minimal()
ggsave("../images/Population3.jpg")

grey_theme <- theme(axis.text.x = element_text(colour = "grey", size = 10, angle = 45, hjust = 0.5, vjust = 0.5),
                      axis.text.y = element_text(colour = "grey", size = 10),
                      text = element_text(size = 12),
                      plot.title = element_text(hjust = 0.5))


ggplot(Pop, aes(x = Suburb, y = value)) +
  geom_bar(stat = "identity",  color='steelblue',fill='steelblue',position = "dodge") +
  facet_wrap(~ variable) +
  labs(title="Number of population by Age",
       x="Suburb",
       y="Number of population") +
  grey_theme +
  theme(panel.grid = element_blank())
ggsave("../images/Population4.jpg")

ggplot(Pop, aes(x = Suburb, y = value)) +
  geom_bar(stat = "identity",  color='steelblue',fill='steelblue',position = "dodge") +
  facet_wrap(~ Sex) +
  labs(title="Number of population by Sex",
       x="Suburb",
       y="Number of population") +
  grey_theme+  theme(panel.grid = element_blank())
ggsave("../images/Population5.jpg")








 

