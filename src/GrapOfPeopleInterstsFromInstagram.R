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


ggsave("../webapp/src/images/socialMediaInsta_Brunswick.jpg" , width = 5, height = 3.5)

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
  theme(plot.title = element_text(size = 10, hjust = 0),
        axis.text.y = element_text(color = "grey20", size = 8, angle = 0, hjust = .5, vjust = .5, face = "plain"))


ggsave("../webapp/src/images/socialMediaInsta_Footscray.jpg" , width = 5, height = 3.5)

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
  theme(plot.title = element_text(size = 10, hjust = 0.5),
        axis.text.y = element_text(color = "grey20", size = 8, angle = 0, hjust = .5, vjust = .5, face = "plain"))


ggsave("../webapp/src/images/socialMediaInsta_Toorak.jpg", width = 5, height = 3.5)
