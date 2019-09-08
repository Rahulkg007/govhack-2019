#

# Import Libraries
library(magrittr)
#require(rlang)
require(ggplot2) 
#require(readr)
require(dplyr)
library(reshape)




# Set directory
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# ----------------------------------
# 
# ----------------------------------

socialMediaInsta = read.csv("../data/socialMediaInsta_MainTrendsInSuburbs.csv", sep = ";")
socialMediaInsta <- melt(socialMediaInsta
                         , id=(c("Category"))
                         , variable_name = "Suburb"
                         )

grey_theme <- theme(axis.text.x = element_text(colour = "grey", size = 10, angle = 45, hjust = 0.5, vjust = 0.5),
                    axis.text.y = element_text(colour = "grey", size = 10),
                    text = element_text(size = 12),
                    plot.title = element_text(hjust = 0.5))



ggplot(socialMediaInsta, aes(x=reorder(Category,value),y=value))+
  geom_bar(stat = "identity", aes(fill = Suburb), position = "dodge") +
  xlab("Categories") + 
  ylab("Numbers") +
  coord_flip() +
  ggtitle("Number of photos (out of 200 for each Suburb)") +
  theme_minimal() + 
  theme(plot.title = element_text(, size = 10, hjust = 0.5),
        axis.text.y = element_text(color = "grey20", size = 5, angle = 0, hjust = .5, vjust = .5, face = "plain"))


ggsave("../webapp/src/images/socialMediaInsta.jpg", width = 5, height = 3)

# ---------------------------------------------
# Top in Brunswick


socialMediaInsta_Brunswick = read.csv("../data/socialMediaInsta_TopInBrunswick.csv", sep = ";")
socialMediaInsta_Brunswick <- melt(socialMediaInsta_Brunswick
                         , id=(c("Category"))
                         , variable_name = "Suburb"
)

ggplot(socialMediaInsta_Brunswick, aes(x=reorder(Category,value),y=value))+
  geom_bar(stat = "identity", aes(fill = Suburb), position = "dodge", fill = "#00CC00") +
  xlab("Categories") + 
  ylab("Numbers") +
  coord_flip() +
  ggtitle("Number of photos in Brunswick") +
  theme_minimal() + 
  theme(plot.title = element_text(, size = 10, hjust = 0),
        axis.text.y = element_text(color = "grey20", size = 8, angle = 0, hjust = .5, vjust = .5, face = "plain"))


ggsave("../webapp/src/images/socialMediaInsta_Brunswick.jpg")

# ---------------------------------------------
# Top in Footscray


socialMediaInsta_Footscray = read.csv("../data/socialMediaInsta_TopInFootscray.csv", sep = ";")
socialMediaInsta_Footscray <- melt(socialMediaInsta_Footscray
                                   , id=(c("Category"))
                                   , variable_name = "Suburb"
)

ggplot(socialMediaInsta_Footscray, aes(x=reorder(Category,value),y=value))+
  geom_bar(stat = "identity", aes(fill = Suburb), position = "dodge", fill = "#FF6666") +
  xlab("Categories") + 
  ylab("Numbers") +
  coord_flip() +
  ggtitle("Number of photos in Footscray") +
  theme_minimal() + 
  theme(plot.title = element_text(, size = 10, hjust = 0),
        axis.text.y = element_text(color = "grey20", size = 8, angle = 0, hjust = .5, vjust = .5, face = "plain"))


ggsave("../webapp/src/images/socialMediaInsta_Footscray.jpg")

# ---------------------------------------------
# Top in Toorak


socialMediaInsta_Toorak = read.csv("../data/socialMediaInsta_TopInToorak.csv", sep = ";")
socialMediaInsta_Toorak <- melt(socialMediaInsta_Toorak
                                   , id=(c("Category"))
                                   , variable_name = "Suburb"
)

ggplot(socialMediaInsta_Toorak, aes(x=reorder(Category,value),y=value))+
  geom_bar(stat = "identity", aes(fill = Suburb), position = "dodge", fill = "#0080FF") +
  xlab("Categories") + 
  ylab("Numbers") +
  coord_flip() +
  ggtitle("Number of photos in Toorak") +
  theme_minimal() + 
  theme(plot.title = element_text(, size = 10, hjust = 0.5),
        axis.text.y = element_text(color = "grey20", size = 8, angle = 0, hjust = .5, vjust = .5, face = "plain"))


ggsave("../webapp/src/images/socialMediaInsta_Toorak.jpg")

# plot
# ggplot(sports, aes(SuburbTown)) + geom_bar(fill="#2c7fb8",width=0.6) + 
#   theme_minimal() + coord_flip() +
#   xlab('') + ggtitle('Categories from the Instagram') +
#   labs(subtitle="Social Media (Instagram 07.09.2019 3pm-18pm)") +
#   theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
# ggsave("../webapp/src/images/Instagram.jpg")

# https://rahulkg007.carto.com/builder/52f3de88-b6c3-4feb-8d5d-ea35862e9ffa/embed

# 
# # ----------------------------------
# # Sports and Recreational Activities
# # ----------------------------------
# 
# ato = read.csv("../data/ATO.csv")
# ato = ato %>% filter(Postcode %in% c(3011, 3056, 3142))
# 
# ato$SuburbTown = "Brunswick"
# ato$SuburbTown[ato$Postcode==3011] = "Footscray"
# ato$SuburbTown[ato$Postcode==3142] = "Toorak"
# 
# ggplot(ato, aes(x=reorder(SuburbTown, Average.taxable.income.or.loss3..),y= Average.taxable.income.or.loss3..)) +
#   geom_bar(stat='identity', fill="#2c7fb8",width=0.6) + 
#   theme_minimal() + coord_flip() +
#   xlab('') + ylab('Average taxable income (AUD)') + ggtitle('Average Taxable Income (ATO)') +
#   labs(subtitle="Australian Taxation Office - Taxation Statistics 2016-17") +
#   theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
# ggsave("../webapp/src/images/ATO.jpg", width = 5, height = 3)
# 
# 
# 
# # ----------------------------------
# # Victoria Population by Age&Sex
# # ----------------------------------
# 
# Pop = read_csv("../data/Population_by_Age_Sex.csv")
# Pop <- melt(Pop, id=(c("Suburb", "Sex")))
# 
# ggplot(Pop, aes(x=reorder(Suburb,value),y=value)) +
#   geom_bar(stat='identity', fill="#2c7fb8",width=0.6) + 
#   theme_minimal() + coord_flip()+xlab('') + ylab('Number of population') + ggtitle('Estimated population 30 June 2018') +
#   labs(subtitle="Australian Bureau of Statistics 29 August 2019") +
#   theme(plot.subtitle=element_text(size=9, face="italic", color="#666666"))
# ggsave("../webapp/src/images/Population1.jpg")
# 
# ggplot(Pop, aes(x=reorder(Suburb,value),y=value))+geom_bar(stat = "identity", aes(fill = variable), position = "dodge") +
#   xlab("Months") + ylab("Number of population") +coord_flip()+
#   ggtitle("Number of population by Age") +
#   theme_minimal()
# ggsave("../webapp/src/images/Population2.jpg")
# 
# ggplot(Pop, aes(x=reorder(Suburb,value),y=value))+geom_bar(stat = "identity", aes(fill = Sex), position = "dodge") +
#   xlab("Months") + ylab("Number of population") +coord_flip()+
#   ggtitle("Number of population by Age") +
#   theme_minimal()
# ggsave("../webapp/src/images/Population3.jpg")
# 
# grey_theme <- theme(axis.text.x = element_text(colour = "grey", size = 10, angle = 45, hjust = 0.5, vjust = 0.5),
#                     axis.text.y = element_text(colour = "grey", size = 10),
#                     text = element_text(size = 12),
#                     plot.title = element_text(hjust = 0.5))
# 
# 
# ggplot(Pop, aes(x = Suburb, y = value)) +
#   geom_bar(stat = "identity",  color='steelblue',fill='steelblue',position = "dodge") +
#   facet_wrap(~ variable) +
#   labs(title="Number of population by Age",
#        x="Suburb",
#        y="Number of population") +
#   grey_theme +
#   theme(panel.grid = element_blank())
# ggsave("../webapp/src/images/Population4.jpg")
# 
# ggplot(Pop, aes(x = Suburb, y = value)) +
#   geom_bar(stat = "identity",  color='steelblue',fill='steelblue',position = "dodge") +
#   facet_wrap(~ Sex) +
#   labs(title="Number of population by Sex",
#        x="Suburb",
#        y="Number of population") +
#   grey_theme+  theme(panel.grid = element_blank())
# ggsave("../webapp/src/images/Population5.jpg")
# 








