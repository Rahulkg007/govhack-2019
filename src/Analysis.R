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
ggsave("../webapp/src/images/Sports.jpg", width = 5, height = 3)

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
ggsave("../webapp/src/images/ATO.jpg", width = 5, height = 3)



# ----------------------------------
# Victoria Population by Age&Sex
# ----------------------------------

Pop = read_csv("../data/Population_by_Age_Sex.csv")
Pop_pct = read_csv("../data/Population_by_Age_Sex_pct.csv")
Pop_series = read_csv("../data/Population_series.csv")
Pop <- melt(Pop, id=(c("Suburb", "Sex")))
Pop_pct <- melt(Pop_pct, id=(c("Suburb", "Sex")))
#Pop_Poportion = mutate(Pop, 
#                       Pop_pct = Pop$value / sum(value))


ggplot(Pop, aes(x=reorder(Suburb,value),y=value)) +
  geom_bar(stat='identity', fill="#2c7fb8",width=0.6) + 
  theme_minimal() + coord_flip()+xlab('') + ylab('Number of population') + ggtitle('Estimated population 30 June 2018') +
  labs(subtitle="Australian Bureau of Statistics 29 August 2019") +
  theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
ggsave("../webapp/src/images/PopulationbySuburb.jpg", width = 5, height = 3)

ggplot(Pop, aes(x = Suburb, y = value)) +
  geom_bar(stat = "identity",  color='steelblue',fill='steelblue',position = "dodge") +
  facet_wrap(~ Sex) +
  labs(title="Number of population by Sex",
       x="Suburb",
       y="Number of population") +
  grey_theme+  theme(panel.grid = element_blank())
ggsave("../webapp/src/images/PopulationbySex.jpg", width = 5, height = 3)

ggplot(Pop_pct, aes(x = factor(Suburb), y = Pop_pct$value, fill = factor(Pop_pct$variable))) +
  geom_bar(stat="identity", position = "fill", width = 0.7) +   labs(x = "", y = NULL, fill = "Age Group") +
  theme_minimal(base_size = 12)+  theme(panel.grid = element_blank())
ggsave("../webapp/src/images/PopulationbyAge.jpg", width = 5, height = 3)

ggplot(Pop_series, aes(x = Year, y = Person)) + 
  geom_line(aes(color = Suburb), size = 1) +
  scale_color_manual(values = c("#00AFBB", "#E7B800","#FC4E07")) +
  theme_bw()
ggsave("../webapp/src/images/PopulationSeries.jpg", width = 5, height = 3)










 

